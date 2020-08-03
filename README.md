# Домашнее задание к лекции «Символы, итераторы, генераторы»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: на задачи данного раздела писать авто-тесты не нужно.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваши GitHub-проекты.

---

## Описание

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

## Символы & итераторы

### Легенда

Для поддержки логики необходимо сделать объекты класса `Team`(команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми. При итерации они должны выдавать персонажей.

### Описание

Реализуйте итератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Person`).
