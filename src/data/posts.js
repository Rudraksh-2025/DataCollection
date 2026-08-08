export const posts = [
  {
    slug: 'pipeline-samples',
    title: 'Inside the pipeline: from raw capture to a retargeted grasp',
    summary:
      'Four clips from a single kitchen demonstration, shown at each stage the pipeline puts it through: head trajectory, dense depth, 3D hand motion, and the retargeted gripper.',
    date: '2026-08-09',
    dateLabel: 'August 9, 2026',
    readingTime: '5 min read',
    tag: 'Pipeline',
  },
];

export const postsBySlug = Object.fromEntries(posts.map((post) => [post.slug, post]));
