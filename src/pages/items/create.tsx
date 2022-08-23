import React from 'react';
import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';

const About = () => {
  return (
    <div>
      <h1>商品新規登録ページ</h1>
      <table>
        <tr>
          <td>ID：</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>商品名：</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>説明：</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>価格：</td>
          <td>
            <input></input>
          </td>
        </tr>
        <tr>
          <td>画像のURL：</td>
          <td>
            <input></input>
          </td>
        </tr>
      </table>
      <button>
        <Link href="../items/">
          <a>[保存]</a>
        </Link>
      </button>
      <button>
        <Link href="/">
          <a>[キャンセル]</a>
        </Link>
      </button>
    </div>
  );
};

export default About;
