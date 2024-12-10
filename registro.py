
import hashlib

def hash_password(password):
    """Función para hashear la contraseña."""
    return hashlib.sha256(password.encode()).hexdigest()

def register_user(username, password):
    """Función para registrar un nuevo usuario."""
    with open('usuarios.txt', 'a') as file:
        file.write(f"{username},{hash_password(password)}\n")
    print("Usuario registrado con éxito.")

def user_exists(username):
    """Función para verificar si el usuario ya existe."""
    try:
        with open('usuarios.txt', 'r') as file:
            for line in file:
                stored_username, _ = line.strip().split(',')
                if stored_username == username:
                    return True
    except FileNotFoundError:
        return False
    return False

def main():
    print("Registro de Usuarios")
    username = input("Ingrese un nombre de usuario: ")
    
    if user_exists(username):
        print("El nombre de usuario ya existe. Intente con otro.")
        return
    
    password = input("Ingrese una contraseña: ")
    register_user(username, password)

if _name_ == "_main_":
    main()