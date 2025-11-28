/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fs } from 'fs';
import path from 'path';

const TASKS_FILE = path.resolve(process.cwd(), 'tasks-data.json');

export async function readTasks() {
	try {
		const data = await fs.readFile(TASKS_FILE, 'utf-8');
		return JSON.parse(data);
	} catch (err) {
		if ((err as any).code === 'ENOENT') return [];
		throw err;
	}
}

export async function writeTasks(tasks: any[]) {
	await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf-8');
}