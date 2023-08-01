import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Проверка имени персонажа, если короткое', () => {
  expect(
    () => new Character('П', 'Bowman', 100, 100),
  ).toThrow('Неправильная длина имени персонажа');
});

test('Проверка имени персонажа, если длинное', () => {
  expect(
    () => new Character('Петяяяяяяяяяяяяяяяяяяяяя', 'Swordsman', 100, 100),
  ).toThrow('Неправильная длина имени персонажа');
});

test('Проверка правильности ввода типа персонажа', () => {
  expect(
    () => new Character('Петя', 'Леший', 100, 100),
  ).toThrow('Нет такого типа персонажа');
});

test('Check Bowman', () => {
  const bowman = new Bowman('Вова');
  expect(bowman).toEqual({
    name: 'Вова',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Check Daemon', () => {
  const daemon = new Daemon('Вова');
  expect(daemon).toEqual({
    name: 'Вова',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Check Magician', () => {
  const magician = new Magician('Вова');
  expect(magician).toEqual({
    name: 'Вова',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Check Swordsman', () => {
  const swordsman = new Swordsman('Вова');
  expect(swordsman).toEqual({
    name: 'Вова',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Check Undead', () => {
  const undead = new Undead('Вова');
  expect(undead).toEqual({
    name: 'Вова',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Check Zombie', () => {
  const zombie = new Zombie('Вова');
  expect(zombie).toEqual({
    name: 'Вова',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
