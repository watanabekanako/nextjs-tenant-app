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
  const onClickCreate = (itemData: any) => {
    return fetch(`/api/items/${itemData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameText,
        description: descText,
        price: priceText,
      }),
    }).then((res) => res.json());
  };
  return (
    <div>
      <h1>商品詳細画面</h1>
      <table>
        <tr>
          <th>商品名</th>
          <td>
            <input
              type="text"
              name="name"
              value={nameText}
              onChange={onChangeNameText}
            ></input>
          </td>
        </tr>
        <tr>
          <th>説明</th>
          <td>
            <textarea
              name="description"
              cols={40}
              rows={4}
              value={descText}
              onChange={onChangeDescText}
            ></textarea>
          </td>
        </tr>
        <tr>
          <th>価格</th>
          <td>
            <input
              type="text"
              name="price"
              value={priceText}
              onChange={onChangePriceText}
            ></input>
          </td>
        </tr>
        <tr>
          <th>画像</th>
          <td>
            <input type="text" name="imageUrl"></input>
          </td>
        </tr>
      </table>
      <Link href="http://localhost:3000/items">
        <button onClick={() => onClickCreate(items)}>保存</button>
      </Link>
      <Link href="/items">
        <button>キャンセル</button>
      </Link>
    </div>
  );
}
