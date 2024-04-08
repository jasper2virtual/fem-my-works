import {z, defineCollection} from 'astro:content';

const fourCardFeatureSection = defineCollection({
    type: 'data',
    schema: ({image})=>z.object({
        cards: z.array(z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            color: z.string()
        }))
    })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'four-card-feature-section': fourCardFeatureSection
};