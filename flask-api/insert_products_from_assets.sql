CREATE TABLE IF NOT EXISTS products (

    _id TEXT PRIMARY KEY,

    name TEXT NOT NULL,

    description TEXT,

    price INTEGER NOT NULL,

    image TEXT,

    category TEXT,

    subCategory TEXT,

    sizes TEXT,

    date BIGINT,

    bestseller BOOLEAN

);



INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaaa',
    'Women Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    100,
    'p_img1.png',
    'Women',
    'Topwear',
    'S|M|L',
    1716634345448,
    TRUE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaab',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    200,
    'p_img2_1.png|p_img2_2.png|p_img2_3.png|p_img2_4.png',
    'Men',
    'Topwear',
    'M|L|XL',
    1716621345448,
    TRUE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaac',
    'Girls Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    220,
    'p_img3.png',
    'Kids',
    'Topwear',
    'S|L|XL',
    1716234545448,
    TRUE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaad',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    110,
    'p_img4.png',
    'Men',
    'Topwear',
    'S|M|XXL',
    1716621345448,
    TRUE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaae',
    'Women Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    130,
    'p_img5.png',
    'Women',
    'Topwear',
    'M|L|XL',
    1716622345448,
    TRUE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaaf',
    'Girls Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    140,
    'p_img6.png',
    'Kids',
    'Topwear',
    'S|L|XL',
    1716623423448,
    TRUE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaag',
    'Men Tapered Fit Flat-Front Trousers',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    190,
    'p_img7.png',
    'Men',
    'Bottomwear',
    'S|L|XL',
    1716621542448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaah',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    140,
    'p_img8.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716622345448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaai',
    'Girls Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    100,
    'p_img9.png',
    'Kids',
    'Topwear',
    'M|L|XL',
    1716622345448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaaj',
    'Men Tapered Fit Flat-Front Trousers',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    110,
    'p_img10.png',
    'Men',
    'Bottomwear',
    'S|L|XL',
    1716622235448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaak',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    120,
    'p_img11.png',
    'Men',
    'Topwear',
    'S|M|L',
    1716623345448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaal',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    150,
    'p_img12.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716624445448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaam',
    'Women Round Neck Pure Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    130,
    'p_img13.png',
    'Women',
    'Topwear',
    'S|M|L|XL',
    1716625545448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaan',
    'Boy Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    160,
    'p_img14.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716626645448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaao',
    'Men Tapered Fit Flat-Front Trousers',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    140,
    'p_img15.png',
    'Men',
    'Bottomwear',
    'S|M|L|XL',
    1716627745448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaap',
    'Girls Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    170,
    'p_img16.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716628845448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaaq',
    'Men Tapered Fit Flat-Front Trousers',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    150,
    'p_img17.png',
    'Men',
    'Bottomwear',
    'S|M|L|XL',
    1716629945448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaar',
    'Boy Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    180,
    'p_img18.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716623105448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaas',
    'Boy Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    160,
    'p_img19.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716632145448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaat',
    'Women Palazzo Pants with Waist Belt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    190,
    'p_img20.png',
    'Women',
    'Bottomwear',
    'S|M|L|XL',
    1716633245448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaau',
    'Women Zip-Front Relaxed Fit Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    170,
    'p_img21.png',
    'Women',
    'Winterwear',
    'S|M|L|XL',
    1716634345448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaav',
    'Women Palazzo Pants with Waist Belt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    200,
    'p_img22.png',
    'Women',
    'Bottomwear',
    'S|M|L|XL',
    1716635445448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaaw',
    'Boy Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    180,
    'p_img23.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716636545448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaax',
    'Boy Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    210,
    'p_img24.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716637645448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaay',
    'Girls Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    190,
    'p_img25.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716638745448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaaz',
    'Women Zip-Front Relaxed Fit Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    220,
    'p_img26.png',
    'Women',
    'Winterwear',
    'S|M|L|XL',
    1716639845448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaba',
    'Girls Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    200,
    'p_img27.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716640945448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabb',
    'Men Slim Fit Relaxed Denim Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    230,
    'p_img28.png',
    'Men',
    'Winterwear',
    'S|M|L|XL',
    1716642045448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabc',
    'Women Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    210,
    'p_img29.png',
    'Women',
    'Topwear',
    'S|M|L|XL',
    1716643145448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabd',
    'Girls Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    240,
    'p_img30.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716644245448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabe',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    220,
    'p_img31.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716645345448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabf',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    250,
    'p_img32.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716646445448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabg',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    250,
    'p_img32.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716646445448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabf',
    'Men Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    250,
    'p_img32.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716646445448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabg',
    'Girls Round Neck Pure Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    230,
    'p_img33.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716647545448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabh',
    'Women Round Neck Pure Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    260,
    'p_img34.png',
    'Women',
    'Topwear',
    'S|M|L|XL',
    1716648645448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabi',
    'Women Zip-Front Relaxed Fit Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    240,
    'p_img35.png',
    'Women',
    'Winterwear',
    'S|M|L|XL',
    1716649745448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabj',
    'Women Zip-Front Relaxed Fit Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    270,
    'p_img36.png',
    'Women',
    'Winterwear',
    'S|M|L|XL',
    1716650845448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabk',
    'Women Round Neck Cotton Top',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    250,
    'p_img37.png',
    'Women',
    'Topwear',
    'S|M|L|XL',
    1716651945448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabl',
    'Men Round Neck Pure Cotton T-Shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    280,
    'p_img38.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716653045448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabm',
    'Men Printed Plain Cotton Shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    260,
    'p_img39.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716654145448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabn',
    'Men Slim Fit Relaxed Denim Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    290,
    'p_img40.png',
    'Men',
    'Winterwear',
    'S|M|L|XL',
    1716655245448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabo',
    'Men Round Neck Pure Cotton T-Shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    270,
    'p_img41.png',
    'Men',
    'Topwear',
    'S|M|L|XL',
    1716656345448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabp',
    'Boy Round Neck Pure Cotton T-shirt',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    300,
    'p_img42.png',
    'Kids',
    'Topwear',
    'S|M|L|XL',
    1716657445448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabq',
    'Kid Tapered Slim Fit Trouser',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    280,
    'p_img43.png',
    'Kids',
    'Bottomwear',
    'S|M|L|XL',
    1716658545448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabr',
    'Women Zip-Front Relaxed Fit Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    310,
    'p_img44.png',
    'Women',
    'Winterwear',
    'S|M|L|XL',
    1716659645448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabs',
    'Men Slim Fit Relaxed Denim Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    290,
    'p_img44.png',
    'Men',
    'Winterwear',
    'S|M|L|XL',
    1716660745448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabt',
    'Men Slim Fit Relaxed Denim Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    320,
    'p_img46.png',
    'Men',
    'Winterwear',
    'S|M|L|XL',
    1716661845448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabu',
    'Kid Tapered Slim Fit Trouser',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    300,
    'p_img47.png',
    'Kids',
    'Bottomwear',
    'S|M|L|XL',
    1716662945448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabv',
    'Men Slim Fit Relaxed Denim Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    330,
    'p_img48.png',
    'Men',
    'Winterwear',
    'S|M|L|XL',
    1716662945448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabw',
    'Kid Tapered Slim Fit Trouser',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    310,
    'p_img49.png',
    'Kids',
    'Bottomwear',
    'S|M|L|XL',
    1716665145448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabx',
    'Kid Tapered Slim Fit Trouser',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    340,
    'p_img50.png',
    'Kids',
    'Bottomwear',
    'S|M|L|XL',
    1716666245448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaaby',
    'Women Zip-Front Relaxed Fit Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    320,
    'p_img51.png',
    'Women',
    'Winterwear',
    'S|M|L|XL',
    1716667345448,
    FALSE
);

INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, date, bestseller)
VALUES (
    'aaabz',
    'Men Slim Fit Relaxed Denim Jacket',
    'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    350,
    'p_img52.png',
    'Men',
    'Winterwear',
    'S|M|L|XL',
    1716668445448,
    FALSE
);