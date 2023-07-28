import BLOG from '@/blog.config';
import Poem from './Poem';
const Footer = ({ fullWidth }) => {
  const d = new Date();
  const y = d.getFullYear();
  const from = +BLOG.since;
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full  text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex justify-between">
          <p>
            {BLOG.author} © {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <Poem />
        </div>
        <div className="flex justify-center">
          <svg height="40" xmlns="http://www.w3.org/2000/svg">
            <a xlinkHref="https://beian.miit.gov.cn/">
              <text
                x="50%"
                y="50%"
                fontSize="14"
                fill="#a2a9b6"
                fontFamily="sans-serif"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                晋ICP备2023017706号-1
              </text>
            </a>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
