import Image from 'next/image';
import Container from '@/components/Container';
import TagItem from '@/components/TagItem';
import { NotionRenderer, defaultMapImageUrl } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import BLOG from '@/blog.config';
import formatDate from '@/lib/formatDate';
import { useLocale } from '@/lib/locale';
import { useRouter } from 'next/router';
import Comments from '@/components/Comments';
import dynamic from 'next/dynamic';

const PrismLoader = dynamic(() => import('@/components/PrismLoader'), {
  ssr: false,
});

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);

const mapPageUrl = (id) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '');
};

//split Tencent COS and the original urls
const mapImageUrl = (imgUrl, block) => {
  if (imgUrl.includes('myqcloud.com')) {
    return imgUrl;
  } else {
    return defaultMapImageUrl(imgUrl, block);
  }
};

const Layout = ({
  children,
  blockMap,
  frontMatter,
  emailHash,
  fullWidth = false,
}) => {
  const locale = useLocale();
  const router = useRouter();
  const imgurlbkg = 'https://tuapi.eees.cc/api.php?category=fengjing&type=302';
  return (
    <Container
      layout="blog"
      title={frontMatter.title}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
      fullWidth={fullWidth}
    >
      <article>
        <div
          className="bg-fixed bg-no-repeat h-96 bg-center bg-contain flex flex-col items-start justify-end"
          style={{ backgroundImage: `url(${imgurlbkg})` }}
        >
          <div className="backdrop-blur-lg py-3 px-2 w-full">
            <h1 className="font-title font-bold text-3xl text-black dark:text-white">
              {frontMatter.title}
            </h1>
            {frontMatter.type[0] !== 'Page' && (
              <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
                <div className="flex">
                  <a href={BLOG.socialLink || '#'} className="flex">
                    <Image
                      alt={BLOG.author}
                      width={24}
                      height={24}
                      src={`https://cravatar.cn/avatar/${emailHash}`}
                      className="rounded-full"
                    />
                    <p className="ml-2 md:block">{BLOG.author}</p>
                  </a>
                  <span className="block">&nbsp;/&nbsp;</span>
                </div>
                <div className="mr-2 md:ml-0">
                  {formatDate(
                    frontMatter?.date?.start_date || frontMatter.createdTime,
                    BLOG.lang
                  )}
                </div>
                {frontMatter.tags && (
                  <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                    {frontMatter.tags.map((tag) => (
                      <TagItem key={tag} tag={tag} />
                    ))}
                  </div>
                )}
              </nav>
            )}
          </div>
        </div>
        {children}
        {blockMap && (
          <div className="-mt-4">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                Equation,
                Code,
                Collection,
              }}
              mapPageUrl={mapPageUrl}
              mapImageUrl={mapImageUrl}
            />
            <PrismLoader />
          </div>
        )}
      </article>
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
        <button
          onClick={() => router.push(BLOG.path || '/')}
          className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
        >
          ← {locale.POST.BACK}
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
        >
          ↑ {locale.POST.TOP}
        </button>
      </div>
      <Comments frontMatter={frontMatter} />
    </Container>
  );
};

export default Layout;
