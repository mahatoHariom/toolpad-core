/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { readTasks, writeTasks } from './tasksStore';


export async function GET() {
  const tasks = await readTasks();
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const tasks = await readTasks();
  const newTask = { ...body, id: Date.now().toString() };
  tasks.push(newTask);
  await writeTasks(tasks);
  return NextResponse.json(newTask, { status: 201 });
}