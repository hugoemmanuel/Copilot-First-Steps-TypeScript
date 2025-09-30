import type { User } from './user.js';

/**
 * Intentionally naive in-memory repository.
 * Kata: improve validation, API clarity, and (optionally) introduce patterns that
 * make it safer to use in larger programs.
 */
export class InMemoryRepo {
  private data = new Map<number, User>();
  private next = 1;

  create(u: Omit<User, 'id'>): User {
    const user: User = { ...u, id: this.next++ };
    this.data.set(user.id, user);
    return user;
  }

  get(id: number): User | undefined {
    return this.data.get(id);
  }

  list(): User[] {
    return [...this.data.values()];
  }

  delete(id: number): boolean {
    return this.data.delete(id);
  }
}
