export interface User {
  email: string;
  userName: string;
  password: string;
}

// Pre-registered users
const defaultUsers: User[] = [
  { email: "teste@1234.com", userName: "Usuário Teste", password: "1234" },
  { email: "admin@1234.com", userName: "Administrador", password: "admin" },
];

let registeredUsers: User[] = [...defaultUsers];

export function authenticate(email: string, password: string): User | null {
  const user = registeredUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user || null;
}

export function registerUser(email: string, userName: string, password: string): { success: boolean; error?: string } {
  const exists = registeredUsers.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (exists) {
    return { success: false, error: "Este e-mail já está cadastrado 🐾" };
  }
  const newUser: User = { email, userName, password };
  registeredUsers.push(newUser);
  return { success: true };
}

export function emailExists(email: string): boolean {
  return registeredUsers.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
}

export function getPasswordStrength(password: string): { level: "fraca" | "média" | "forte"; score: number } {
  let score = 0;
  if (password.length >= 4) score++;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { level: "fraca", score };
  if (score <= 3) return { level: "média", score };
  return { level: "forte", score };
}
