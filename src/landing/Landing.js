import React, { useEffect, useState } from 'react';

import Featured from './component/featured/Featured';
import Information from './component/Information';
import Layout from '../common/component/Layout';

import useProducts from './hooks/useProducts';
import FilterProduct from '../common/component/FilterProduct';

const Landing = () => {
  // const { data, error, loading } = useProducts('1')
  const data = {
    "data": {
        "current_page": 1,
        "data": [
            {
                "_id": "62f21d08a65692271708e9b7",
                "name": "Illo dolor quos aut voluptatem qui consequatur sit.",
                "category": "people",
                "price": 261,
                "currency": "EUR",
                "image": {
                    "src": "https://technical-frontend-api.bokokode.com/img/Product_Featured_product.png",
                    "alt": "Illo dolor quos aut voluptatem qui consequatur sit."
                },
                "bestseller": true,
                "featured": true,
                "description": "Incidunt libero consequatur inventore voluptas neque dolor odit. Suscipit quos ab quo voluptatem. Saepe a ut ad et ratione.",
                "people_also_buy": [
                    {
                        "_id": "62f21d08a65692271708e9b7",
                        "name": "Illo dolor quos aut voluptatem qui consequatur sit.",
                        "category": "people",
                        "price": 261,
                        "currency": "EUR",
                        "image": {
                            "src": "https://technical-frontend-api.bokokode.com/img/Product_2.png",
                            "alt": "Accusamus officia sunt qui officiis quod."
                        },
                        "bestseller": true,
                        "featured": false,
                        "description": "Incidunt libero consequatur inventore voluptas neque dolor odit. Suscipit quos ab quo voluptatem. Saepe a ut ad et ratione.",
                        "people_also_buy": [],
                        "updated_at": "2022-08-09T08:38:32.053000Z",
                        "created_at": "2022-08-09T08:38:32.053000Z"
                    },
                    {
                        "_id": "62f21d08a65692271708e9b8",
                        "name": "Placeat illo ipsa voluptas est adipisci enim a.",
                        "category": "nature",
                        "price": 470,
                        "currency": "EUR",
                        "image": {
                            "src": "https://technical-frontend-api.bokokode.com/img/Product_3.png",
                            "alt": "Nostrum consequatur ut nesciunt quia hic qui quis."
                        },
                        "bestseller": false,
                        "featured": false,
                        "description": "Molestias nam enim sunt. Doloremque voluptatem quisquam excepturi.",
                        "people_also_buy": [],
                        "updated_at": "2022-08-09T08:38:32.057000Z",
                        "created_at": "2022-08-09T08:38:32.057000Z"
                    },
                    {
                        "_id": "62f21d08a65692271708e9b9",
                        "name": "Eum in consequatur maxime.",
                        "category": "cities",
                        "price": 306,
                        "currency": "EUR",
                        "image": {
                            "src": "https://technical-frontend-api.bokokode.com/img/Product_6.png",
                            "alt": "Tempore vel iste sed ea."
                        },
                        "bestseller": false,
                        "featured": false,
                        "description": "Ab unde voluptate quidem omnis mollitia eligendi vitae animi. Eius praesentium asperiores est quia. Dolor earum eaque laudantium aperiam possimus temporibus amet et.",
                        "people_also_buy": [],
                        "updated_at": "2022-08-09T08:38:32.057000Z",
                        "created_at": "2022-08-09T08:38:32.057000Z"
                    }
                ],
                "updated_at": "2022-08-09T08:38:32.066000Z",
                "created_at": "2022-08-09T08:38:32.053000Z"
            },
            {
                "_id": "62f21d08a65692271708e9b8",
                "name": "Placeat illo ipsa voluptas est adipisci enim a.",
                "category": "nature",
                "price": 470,
                "currency": "EUR",
                "image": {
                    "src": "https://technical-frontend-api.bokokode.com/img/Product_3.png",
                    "alt": "Nostrum consequatur ut nesciunt quia hic qui quis."
                },
                "bestseller": false,
                "featured": false,
                "description": "Molestias nam enim sunt. Doloremque voluptatem quisquam excepturi.",
                "people_also_buy": [],
                "updated_at": "2022-08-09T08:38:32.057000Z",
                "created_at": "2022-08-09T08:38:32.057000Z"
            },
            {
                "_id": "62f21d08a65692271708e9b9",
                "name": "Eum in consequatur maxime.",
                "category": "cities",
                "price": 306,
                "currency": "EUR",
                "image": {
                    "src": "https://technical-frontend-api.bokokode.com/img/Product_6.png",
                    "alt": "Tempore vel iste sed ea."
                },
                "bestseller": false,
                "featured": false,
                "description": "Ab unde voluptate quidem omnis mollitia eligendi vitae animi. Eius praesentium asperiores est quia. Dolor earum eaque laudantium aperiam possimus temporibus amet et.",
                "people_also_buy": [],
                "updated_at": "2022-08-09T08:38:32.057000Z",
                "created_at": "2022-08-09T08:38:32.057000Z"
            },
            {
                "_id": "62f21d08a65692271708e9ba",
                "name": "Delectus iusto ut consequatur.",
                "category": "cities",
                "price": 370,
                "currency": "EUR",
                "image": {
                    "src": "https://technical-frontend-api.bokokode.com/img/Product_6.png",
                    "alt": "Ut sed officia dolores quo ut."
                },
                "bestseller": true,
                "featured": false,
                "description": "Voluptatibus dignissimos sapiente suscipit. Perspiciatis omnis minus nemo aspernatur. Itaque voluptatibus cum qui rerum deleniti facilis. Aperiam ipsam provident soluta excepturi qui.",
                "people_also_buy": [],
                "updated_at": "2022-08-09T08:38:32.057000Z",
                "created_at": "2022-08-09T08:38:32.057000Z"
            },
            {
                "_id": "62f21d08a65692271708e9bb",
                "name": "Expedita ratione vel voluptas sit aliquid voluptas labore.",
                "category": "food",
                "price": 221,
                "currency": "EUR",
                "image": {
                    "src": "https://technical-frontend-api.bokokode.com/img/Product_5.png",
                    "alt": "Libero aliquid et reiciendis ullam."
                },
                "bestseller": false,
                "featured": false,
                "description": "Quia non modi consequuntur debitis optio minima sint. Commodi a corrupti porro quidem exercitationem fugiat dolorem. Officiis velit atque est explicabo laudantium quibusdam sit.",
                "people_also_buy": [],
                "updated_at": "2022-08-09T08:38:32.057000Z",
                "created_at": "2022-08-09T08:38:32.057000Z"
            },
            {
                "_id": "62f21d08a65692271708e9bc",
                "name": "Libero necessitatibus totam est ipsum.",
                "category": "cities",
                "price": 126,
                "currency": "EUR",
                "image": {
                    "src": "https://technical-frontend-api.bokokode.com/img/Product_3.png",
                    "alt": "Maxime aliquid incidunt qui est sequi quas."
                },
                "bestseller": false,
                "featured": false,
                "description": "Suscipit iure occaecati nihil eum. Neque velit alias molestias necessitatibus in. Consequatur quia sed qui consequuntur voluptatem odio possimus.",
                "people_also_buy": [],
                "updated_at": "2022-08-09T08:38:32.057000Z",
                "created_at": "2022-08-09T08:38:32.057000Z"
            }
        ],
        "first_page_url": "https://technical-frontend-api.bokokode.com/api/products?page=1",
        "from": 1,
        "last_page": 9,
        "last_page_url": "https://technical-frontend-api.bokokode.com/api/products?page=9",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=6",
                "label": "6",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=7",
                "label": "7",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=8",
                "label": "8",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=9",
                "label": "9",
                "active": false
            },
            {
                "url": "https://technical-frontend-api.bokokode.com/api/products?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": "https://technical-frontend-api.bokokode.com/api/products?page=2",
        "path": "https://technical-frontend-api.bokokode.com/api/products",
        "per_page": 6,
        "prev_page_url": null,
        "to": 6,
        "total": 50
    }
}
  const [photoDay, setPhotoDay] = useState()
  const [productAlsoBuy, setProductAlsoBuy] = useState()

  // const featuredProduct = data.data.find(product => product.featured)
  return (
    <>
      <Layout>
        <Featured />
        <Information data={productAlsoBuy} />
        <FilterProduct />
      </Layout>
    </>
  );
};

export default Landing;