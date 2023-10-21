class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(
    protected dor: boolean,
    protected key: Key,
    protected tenants: Person[] = []
  ) {}

  comeIn(person: Person): void {
    if (this.dor) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.dor = true;
      console.log("Door is opened");
    } else {
      console.log("Door is closed");
    }
  }
}

const key = new Key();

const house = new MyHouse(true, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
