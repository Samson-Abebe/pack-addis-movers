import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
     
      links: [

        {
          text: 'Landing',
          href: getPermalink('/'),
        },
       
      ],
    },
    {
      text: 'Discovery',
      links: [   
        {
          text: 'Trust',
          href: getPermalink('/Trust'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        }, 
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Home Mover',
          href: getPermalink('/Services/Home Mover'),
        },
        {
          text: 'Office Relocation',
          href: getPermalink('/Services/Office Relocation'),
        },
        {
          text: 'Packing & Unpacking',
          href: getPermalink('/Services/Packing & Unpacking'),
        },
     
        {
          text: 'Dismantling & Reassembly',
          href: getPermalink('/Services/Dismantling & Reassembly'),
        },
        {
          text: 'Storage Service',
          href: getPermalink('/Services/Storage Service'),
        },
        {
          text: 'Cleaning Service',
          href: getPermalink('/Services/Cleaning Service'),
        },
     
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact us', href: getPermalink('/contact'), target: '_blank' }],
};


export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Residential Relocation' },
        { text: 'Office Relocation' },
        { text: 'Packing & Unpacking' },
        { text: 'TV Mounting & Electronics' },
      ],
    },
    {
      title: 'Specialized',
      links: [
        { text: 'Diplomatic Institutions' },
        { text: 'Warehouse & Cargo Freight' },
        { text: 'Glass & Fragile Care' },
        { text: 'Dismantling & Reassembly' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: '100% Responsibility' },
        { text: '4-Hour Fast Turnaround' },
        { text: 'Short & Long-Term Storage' },
        { text: 'Pre & Post-Move Cleaning' },
      ],
    },
    {
      title: 'Coverage',
      links: [
        { text: 'Addis Ababa Sub-cities' },
        { text: 'Condominium & High-Rise' },
        { text: 'Villas & Apartments' },
        { text: 'Regional State Transit' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms' },
    { text: 'Privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/trustpackandmove' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/251900000000' },
    { ariaLabel: 'Phone', icon: 'tabler:phone', href: 'tel:+251900000000' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <span class="font-semibold text-primary">Trustpack and Move</span>. All rights reserved.
  `,
};