// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

export default defineConfig({
    site: 'https://wiki.chengxin.design',

    integrations: [
        starlight({
            title: 'Aether Workshop Wiki',
            logo: {
                src: './src/assets/aether-logo.png',
                alt: 'Aether Workshop logo',
            },
            customCss: ['./src/styles/global.css'],
            editLink: {
                baseUrl: 'https://github.com/chengxinzhaox/aether-workshop-wiki/edit/main/docs',
            },
            lastUpdated: true,
            locales: {
                root: {
                    label: 'English',
                    lang: 'en',
                },
                zh: {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
            },
            plugins: [
                lucode({
                    docs: {
                        includeAiUtilities: true,
                    },
                    navLinks: [
                        { label: 'Start', link: '/quick-start/' },
                        { label: 'AI', link: '/ai/project-ai/' },
                        { label: 'Cloud', link: '/cloud/overview/' },
                        { label: '中文', link: '/zh/' },
                    ],
                }),
            ],
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/chengxinzhaox/aether-workshop-wiki',
                },
            ],
            sidebar: [
                {
                    label: 'Start Here',
                    items: [
                        { label: 'Quick Start', link: '/quick-start/' },
                        { label: 'Install and Configure', link: '/install-and-configure/' },
                        { label: 'Interface Overview', link: '/interface-overview/' },
                        { label: 'Core Concepts', link: '/core-concepts/' },
                    ],
                },
                {
                    label: 'Feature Guides',
                    items: [
                        { label: 'Project Canvas', link: '/features/project-canvas/' },
                        { label: 'Hardware and Ports', link: '/features/hardware-and-ports/' },
                        { label: 'Component Library', link: '/features/component-library/' },
                        { label: 'Capsules', link: '/features/capsules/' },
                        { label: 'Code, Verify, Upload', link: '/features/code-upload/' },
                        { label: 'Serial, Media, Face Detection', link: '/features/serial-media-face/' },
                    ],
                },
                {
                    label: 'AI Workflows',
                    items: [
                        { label: 'Project AI', link: '/ai/project-ai/' },
                        { label: 'Library AI', link: '/ai/library-ai/' },
                        { label: 'AI Settings', link: '/ai/settings/' },
                    ],
                },
                {
                    label: 'Projects and Cloud',
                    items: [
                        { label: 'Project Files and History', link: '/projects/files-history/' },
                        { label: 'Cloud Libraries', link: '/cloud/overview/' },
                        { label: 'Component and Capsule History', link: '/cloud/history/' },
                    ],
                },
                {
                    label: 'Guides and Reference',
                    items: [
                        { label: 'Workflow Tutorials', link: '/tutorials/workflows/' },
                        { label: 'Settings and Environment', link: '/reference/settings-environment/' },
                        { label: 'Troubleshooting', link: '/reference/troubleshooting/' },
                        { label: 'FAQ', link: '/reference/faq/' },
                        { label: 'Advanced Users', link: '/reference/advanced/' },
                        { label: 'Release Notes', link: '/reference/release-notes/' },
                    ],
                },
            ],
        }),
    ],

    vite: {
        plugins: [],
    },
});
