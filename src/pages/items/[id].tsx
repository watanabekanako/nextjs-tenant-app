// export default function post({ post }) {
//   return (
//     <div>
//       <h1>POST(投稿){post.id}</h1>
//       <h2>{post.name}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// export async function getServerSideProps({ params }) {
//   const id = params.post;
//   const res = await fetch(`http://localhost:3000/api/items/${id}`);
//   const post = await res.json();
//   return { props: { post } };
// }
import { useRouter } from 'next/router';
const UserPage = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    // idが変わったら（取得できたら）、ユーザーをDBから取得する
    getUser(router.query.id).then((result) => setUser(result));
  }, [router.query.id]);

  if (user) {
    return <div>{user.name}</div>;
  } else {
    return null;
  }
};
