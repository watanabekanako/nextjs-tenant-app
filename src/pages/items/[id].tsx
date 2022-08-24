import { useState } from 'react';
import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';
// import { getStaticProps } from 'next';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `http://localhost:8000/items/${params.id} `
  );
  const item = await res.json();

  return {
    props: {
      items: item,
    },
  };
}

export async function getItemsIds() {
  const items = await fetch('http://localhost:8000/items').then(
    (res) => res.json()
  );

  return items.map((item: { id: string }) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = await getItemsIds();

  return {
    paths,
    fallback: false,
  };
}
export default function ItemCreate({ items }: any) {
  const [nameText, setNameText] = useState(items.name);
  const onChangeNameText = (event: any) =>
    setNameText(event.target.value);

  const [descText, setDescText] = useState(items.description);
  const onChangeDescText = (event: any) =>
    setDescText(event.target.value);

  const [priceText, setPriceText] = useState(items.price);
  const onChangePriceText = (event: any) =>
    setPriceText(event.target.value);
  const Form = () => {
    const { mutate } = useSWRConfig();
    const [values, setValues] = useState({
      id: '',
      name: '',
      description: '',
      price: '',
    });

    const handleChange: (name: string) => (event: any) => void =
      (name) => (event) => {
        const newValues = {
          ...values,
          [name]: event.target.value,
        };
        setValues(newValues);
      };

    const handleSubmit = () => {
      const param = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },

        // リクエストボディ
        body: JSON.stringify(values),
      };
      fetch(`/api/items/`, param).then((response) => response.json());
      // .then((data) => console.log(data));
      mutate('/api/items');
    };

    return (
      <>
        <h1>新規登録画面</h1>
        <div>
          {/* <h2>ID:</h2>
        <input
          type="text"
          name="id"
          value={values.id}
          onChange={handleChange('id')}
        /> */}

          <h2>名前:</h2>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange('name')}
          />

          <h2>説明: </h2>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange('description')}
          />
          <h2>価格: </h2>
          <input
            type="text"
            name="price"
            value={values.price}
            onChange={handleChange('price')}
          />

          <div>
            <button onClick={handleSubmit}>
              <Link href="../items/">
                <a>保存する</a>
              </Link>
            </button>
            <button>キャンセル</button>
          </div>
        </div>
      </>
    );
  };
}
export default ItemCreate;
