import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";
import relativeTime from "dayjs/plugin/relativeTime";

// to create from now from local time
dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <div>
        <Image
          src={author.profileImageUrl}
          width={48}
          height={48}
          alt="Profile name"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <Link href={`/@${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span className="font-thin">{`· ${dayjs(
              post.createdAt
            ).fromNow()}`}</span>
          </Link>
        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  );
};
export default PostView;
