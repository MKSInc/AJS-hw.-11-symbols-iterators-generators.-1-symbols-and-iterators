// TODO: write your code here
import Team from './Team';
import Person from './Person';

const team = new Team();

const bowman = new Person('Player1', 'Bowerman', 25, 25);
const swordsman = new Person('Player2', 'Swordsman', 40, 10);
const magician = new Person('Player3', 'Magician', 10, 40);
const undead = new Person('Player4', 'Undead', 25, 25);
const zombie = new Person('Player5', 'Zombie', 40, 10);

team.addPlayer(bowman);
team.addPlayer(swordsman);
team.addPlayer(magician);
team.addPlayer(undead);
team.addPlayer(zombie);

for (const player of team) {
  // eslint-disable-next-line no-console
  console.log(player);
}
