import Img from '@/img/my-photo.jpeg'

const SEO = {
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://nata-codedev-com-br.vercel.app/',
        title: 'Codedev&Blog',
        description: 'Este é meu blog pessoal',
        site_name: 'Codedev&Blog',
        images: [
            {
                url: `${Img}`,
                alt: 'Minha foto de perfil',
            },
        ],
    },
    twitter: {
        handle: '@NataCodedev',
        site: '@site',
        cardType: 'summary_large_image'
    }
};

export default SEO;
