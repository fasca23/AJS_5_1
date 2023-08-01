const types = [
  'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
];

// const types = [
//   'Лучник', 'Мечник', 'Маг', 'Демон', 'Нежить', 'Зомби',
// ];

export default class Character {
  constructor(name, type, attack, defence) {
    // Длина имени более 2 и менее 10 должна быть
    if (name.length < 2 || name.length > 10) {
      // Если не так бросаем исключение
      throw new Error('Неправильная длина имени персонажа');
    }
    // Проверяем содержится ли данный тип в массиве типов
    if (!types.includes(type)) {
      throw new Error('Нет такого типа персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

// const characterOne = new Character('Петя', 'Bowman', 25, 25);

// console.log(characterOne);
