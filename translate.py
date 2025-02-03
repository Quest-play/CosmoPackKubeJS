import json
import tkinter as tk
from tkinter import filedialog, messagebox
from deep_translator import GoogleTranslator

def translate_json(file_path, target_lang="ru"):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            data = json.load(file)
        
        translator = GoogleTranslator(source="auto", target=target_lang)
        
        for key in data:
            data[key] = translator.translate(data[key])
        
        save_path = filedialog.asksaveasfilename(defaultextension=".json", filetypes=[("JSON files", "*.json")])
        if save_path:
            with open(save_path, "w", encoding="utf-8") as file:
                json.dump(data, file, indent=4, ensure_ascii=False)
            messagebox.showinfo("Успех", "Файл успешно переведен и сохранен!")
    except Exception as e:
        messagebox.showerror("Ошибка", f"Произошла ошибка: {e}")

def open_file():
    file_path = filedialog.askopenfilename(filetypes=[("JSON files", "*.json")])
    if file_path:
        translate_json(file_path)

root = tk.Tk()
root.title("JSON Translator")
root.geometry("300x150")

tk.Button(root, text="Выбрать JSON файл", command=open_file).pack(pady=20)

root.mainloop()
