import os
import json
import tkinter as tk
from tkinter import messagebox, simpledialog

def create_directory_structure():
    base_path = "data/bountiful"
    os.makedirs(os.path.join(base_path, "bounty_decrees"), exist_ok=True)
    os.makedirs(os.path.join(base_path, "bounty_pools"), exist_ok=True)

def generate_bounty_decree():
    name = simpledialog.askstring("Bounty Decree", "Введите название распоряжения:")
    if not name:
        return
    objectives = simpledialog.askstring("Bounty Decree", "Введите список целей через запятую:").split(",")
    rewards = simpledialog.askstring("Bounty Decree", "Введите список наград через запятую:").split(",")
    
    data = {
        "objectives": [obj.strip() for obj in objectives],
        "rewards": [rew.strip() for rew in rewards]
    }
    path = f"data/bountiful/bounty_decrees/{name}.json"
    with open(path, "w") as file:
        json.dump(data, file, indent=4)
    messagebox.showinfo("Успех", f"Файл {path} создан!")

def generate_bounty_pool():
    name = simpledialog.askstring("Bounty Pool", "Введите название пула:")
    if not name:
        return
    content = {}
    while True:
        key = simpledialog.askstring("Bounty Pool", "Введите ключ объекта (или оставьте пустым для завершения):")
        if not key:
            break
        obj_type = simpledialog.askstring("Bounty Pool", "Тип (item/entity):")
        content_type = simpledialog.askstring("Bounty Pool", "Содержание (например, minecraft:emerald):")
        min_amount = int(simpledialog.askinteger("Bounty Pool", "Минимальное количество:"))
        max_amount = int(simpledialog.askinteger("Bounty Pool", "Максимальное количество:"))
        unit_worth = int(simpledialog.askinteger("Bounty Pool", "Стоимость единицы:"))
        weight_mult = simpledialog.askfloat("Bounty Pool", "Множитель веса (необязательно):")
        rarity = simpledialog.askstring("Bounty Pool", "Редкость (необязательно):").strip()
        
        obj_data = {
            "type": obj_type,
            "content": content_type,
            "amount": {"min": min_amount, "max": max_amount},
            "unitWorth": unit_worth
        }
        if weight_mult is not None:
            obj_data["weightMult"] = weight_mult
        if rarity:
            obj_data["rarity"] = rarity
        
        content[key] = obj_data
    
    path = f"data/bountiful/bounty_pools/{name}.json"
    with open(path, "w") as file:
        json.dump({"content": content}, file, indent=4)
    messagebox.showinfo("Успех", f"Файл {path} создан!")

def main():
    create_directory_structure()
    
    root = tk.Tk()
    root.withdraw()
    
    choice = messagebox.askquestion("Выбор", "Создать Bounty Decree? (Нет - создастся Bounty Pool)")
    if choice == "yes":
        generate_bounty_decree()
    else:
        generate_bounty_pool()
    
if __name__ == "__main__":
    main()
