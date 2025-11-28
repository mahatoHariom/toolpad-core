/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { readTasks, writeTasks } from '../tasksStore';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tasks = await readTasks();
  const task = tasks.find((t: any) => String(t.id) === String(id));
  if (!task) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(task);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const tasks = await readTasks();
  const idx = tasks.findIndex((t: any) => String(t.id) === String(id));
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  tasks[idx] = { ...tasks[idx], ...body };
  await writeTasks(tasks);
  return NextResponse.json(tasks[idx]);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tasks = await readTasks();
  const idx = tasks.findIndex((t: any) => String(t.id) === String(id));
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const [deleted] = tasks.splice(idx, 1);
  await writeTasks(tasks);
  return NextResponse.json(deleted);
}
