import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

export type MarkdownPost = {
    title: string
    date: string
    subtitle: string
    description: string
    slug: string
}

const markdownDirectory = path.join(process.cwd(), 'posts');

export function getMetadata(): MarkdownPost[] {
    const fileNames = fs.readdirSync(markdownDirectory);

    const markdownFiles: MarkdownPost[] = fileNames.map((fileName) => {
        const slug = fileName.replace('.md', '');

        const filePath = path.join(markdownDirectory, fileName);
        const content = fs.readFileSync(filePath, 'utf-8');
        const matterResults = matter(content)

        return {
            title: matterResults.data.title,
            date: matterResults.data.date,
            subtitle: matterResults.data.subtitle,
            description: matterResults.data.description,
            slug: fileName.replace(".md", "")
        };
    });

    return markdownFiles
}
