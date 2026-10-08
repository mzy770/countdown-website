import test from 'node:test';
import assert from 'node:assert/strict';
import { STUDY_MODULES, seedModules } from '../source/syllabus.js';

test('all extracted modules have unique stable IDs and chapter labels', () => {
  assert.equal(STUDY_MODULES.length, 265);
  assert.equal(new Set(STUDY_MODULES.map(t => t.id)).size, STUDY_MODULES.length);
  assert.ok(STUDY_MODULES.every(t => t.category && t.chapter && t.text));
});

test('first import appends modules without changing the existing task or date', () => {
  const original = { name: '考试', target: 123, tasks: [{ id: 'custom', text: '旧事项' }] };
  const imported = seedModules(original);
  assert.equal(imported.tasks.length, 266);
  assert.deepEqual(imported.tasks[0], original.tasks[0]);
  assert.equal(imported.name, original.name);
  assert.equal(imported.target, original.target);
  assert.equal(original.tasks.length, 1);
  assert.equal(seedModules(imported), imported);
});

test('completed modules remain absent on reload and legacy import', () => {
  const id = STUDY_MODULES[0].id;
  const imported = seedModules({ tasks: [] });
  const completed = { ...imported, tasks: imported.tasks.filter(t => t.id !== id), completedModules: [id] };
  assert.equal(seedModules(completed).tasks.some(t => t.id === id), false);
  assert.equal(seedModules({ tasks: [], completedModules: [id] }).tasks.length, 264);
});
