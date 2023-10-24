class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(otherPerson: Person): string {
      if (this.age < otherPerson.age) {
        return `${otherPerson.name} is older than me.`;
      } else if (this.age > otherPerson.age) {
        return `${otherPerson.name} is younger than me.`;
      } else {
        return `${otherPerson.name} is the same age as me.`;
      }
    }
}

export default Person;
