import { useEffect, useState } from "react";
import GameResult from "./GameResult";
const fakeData1 = [
  {
    id: 0,
    name: "card0",
    src: "https://blogphanmem.vn/wp-content/uploads/2021/12/Cute-pho-mai-que-8.jpeg",
    value: 1,
  },
  {
    id: 1,
    name: "card1",
    src: "https://blogphanmem.vn/wp-content/uploads/2021/12/Cute-pho-mai-que-8.jpeg",
    value: 1,
  },
  {
    id: 2,
    name: "card2",
    src: "https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000",
    value: 2,
  },
  {
    id: 3,
    name: "card3",
    src: "https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000",
    value: 2,
  },
  {
    id: 4,
    name: "card4",
    src: "https://i.pinimg.com/originals/c0/35/93/c0359338afed76db7acbf2357f6b8ead.jpg",
    value: 3,
  },
  {
    id: 5,
    name: "card5",
    src: "https://i.pinimg.com/originals/c0/35/93/c0359338afed76db7acbf2357f6b8ead.jpg",
    value: 3,
  },
  {
    id: 6,
    name: "card6",
    src: "https://img.freepik.com/premium-vector/illustration-cute-panda-animal-holding-cellphone-selfie_498928-156.jpg",
    value: 4,
  },
  {
    id: 7,
    name: "card7",
    src: "https://img.freepik.com/premium-vector/illustration-cute-panda-animal-holding-cellphone-selfie_498928-156.jpg",
    value: 4,
  },
  {
    id: 8,
    name: "card8",
    src: "https://c.tenor.com/tCqXyHRbLaQAAAAC/cute-panda.gif",
    value: 5,
  },
  {
    id: 9,
    name: "card9",
    src: "https://c.tenor.com/tCqXyHRbLaQAAAAC/cute-panda.gif",
    value: 5,
  },
  {
    id: 10,
    name: "card10",
    src: "https://media.istockphoto.com/vectors/cute-shiba-inu-dog-with-sunglasses-drinking-bubble-tea-cartoon-vector-vector-id1285010832?k=20&m=1285010832&s=612x612&w=0&h=Hi_uGmr8nWtx7db-FF7ZeVKDMe20vDerDZbCJ-dDWWY=",
    value: 7,
  },
  {
    id: 11,
    name: "card11",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-i6qJmStFBaOJCf8Q08aH4qKba7XaijOWeXyXwDvn1QD3BwFg4BVeRpnkOqxu3jhe_g4&usqp=CAU",
    value: 6,
  },
  {
    id: 12,
    name: "card12",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-i6qJmStFBaOJCf8Q08aH4qKba7XaijOWeXyXwDvn1QD3BwFg4BVeRpnkOqxu3jhe_g4&usqp=CAU",
    value: 6,
  },
  {
    id: 13,
    name: "card13",
    src: "https://media.istockphoto.com/vectors/cute-shiba-inu-dog-with-sunglasses-drinking-bubble-tea-cartoon-vector-vector-id1285010832?k=20&m=1285010832&s=612x612&w=0&h=Hi_uGmr8nWtx7db-FF7ZeVKDMe20vDerDZbCJ-dDWWY=",
    value: 7,
  },
  {
    id: 14,
    name: "card14",
    src: "https://static.vecteezy.com/system/resources/previews/002/872/457/non_2x/cute-fox-drinking-boba-milk-tea-animal-cartoon-concept-isolated-can-used-for-t-shirt-greeting-card-invitation-card-or-mascot-flat-cartoon-style-free-vector.jpg",
    value: 8,
  },
  {
    id: 15,
    name: "card15",
    src: "https://static.vecteezy.com/system/resources/previews/002/872/457/non_2x/cute-fox-drinking-boba-milk-tea-animal-cartoon-concept-isolated-can-used-for-t-shirt-greeting-card-invitation-card-or-mascot-flat-cartoon-style-free-vector.jpg",
    value: 8,
  },
].sort(() => Math.random() - 0.5);

const data55 = [
  {
    id: 16,
    name: "card16",
    src: "https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg",
    value: 9,
  },
  {
    id: 17,
    name: "card17",
    src: "https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg",
    value: 9,
  },
  {
    id: 18,
    name: "card18",
    src: "https://yohohindi.com/wp-content/uploads/2021/04/Yohohindi.com__21-300x300.jpg",
    value: 10,
  },
  {
    id: 19,
    name: "card19",
    src: "https://yohohindi.com/wp-content/uploads/2021/04/Yohohindi.com__21-300x300.jpg",
    value: 10,
  },
];

const data66 = [
  ...data55,
  {
    id: 20,
    name: "card20",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsOo79pqwSFtoXycrY6ByDPnX61yv8K0hnw&usqp=CAU",
    value: 11,
  },
  {
    id: 21,
    name: "card21",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsOo79pqwSFtoXycrY6ByDPnX61yv8K0hnw&usqp=CAU",
    value: 11,
  },
  {
    id: 22,
    name: "card22",
    src: "https://thumbs.dreamstime.com/b/illustration-cute-panda-animal-cartoon-character-wearing-mask-against-virus-cute-panda-animal-cartoon-characters-wearing-213323515.jpg",
    value: 12,
  },
  {
    id: 23,
    name: "card23",
    src: "https://thumbs.dreamstime.com/b/illustration-cute-panda-animal-cartoon-character-wearing-mask-against-virus-cute-panda-animal-cartoon-characters-wearing-213323515.jpg",
    value: 12,
  },
];

export default function GameContainer() {
  const [open, setOpen] = useState(false);
  const [clickItem, setClickItem] = useState([]);
  const [done, setDone] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(0);
  const [flips, setFlips] = useState([]);
  const [fakeData, setFakeData] = useState(fakeData1);

  const handleClick = (data) => {
    if (!loading) {
      setFlag(true);
      setClickItem([...clickItem, data.id]);
      setOpen(true);
      setLoading(true);
      if (!done.includes(data.id) && !clickItem.includes(data.id)) {
        setFlips([...flips, data.id]);
      }
    }
  };

  useEffect(() => {
    let timer;
    if (flag) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      if (done.length === fakeData.length) {
        clearInterval(timer);
      }
    }
    return () => clearInterval(timer);
  }, [flag, time, done, fakeData.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (clickItem.length === 2) {
        const newList = fakeData.filter((item) => clickItem.includes(item.id));
        if (
          newList[0]?.value === newList[1]?.value &&
          !done.includes(newList[0]?.id) &&
          !done.includes(newList[1]?.id)
        ) {
          setDone([...done, newList[0].id, newList[1].id]);
        }
        setClickItem([]);
        setOpen(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [clickItem, done, fakeData]);

  const handleRefresh = () => {
    setOpen(false);
    setClickItem([]);
    setDone([]);
    setLoading(false);
    setFlag(false);
    setTime(0);
    setFlips([]);
    setFakeData(fakeData.sort(() => Math.random() - 0.5));
  };
  const options = [
    { value: "4", text: "Level 1" },
    { value: "5", text: "Level 2" },
    { value: "6", text: "Level 3" },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (e) => {
    setOpen(false);
    setClickItem([]);
    setDone([]);
    setLoading(false);
    setFlag(false);
    setTime(0);
    setFlips([]);
    setSelected(e.target.value);
    if (e.target.value === "4") {
      setFakeData(fakeData1);
    }
    if (e.target.value === "5") {
      const data = [...fakeData1, ...data55];
      setFakeData(data.sort(() => Math.random() - 0.5));
    }
    if (e.target.value === "6") {
      const data = [...fakeData1, ...data66];
      setFakeData(data.sort(() => Math.random() - 0.5));
    }
  };

  return (
    <div className="bg-slate-600 p-2 rounded-lg">
      <div className={`grid grid-cols-${selected} gap-4`}>
        {fakeData.map((item) => (
          <div
            className="w-[90px] h-[90px] relative bg-orange-400 rounded-lg overflow-hidden transition: 0.4s ease-in-out select-none"
            style={
              (open && clickItem.includes(item.id)) || done.includes(item.id)
                ? {
                    transform: "rotateY(180deg)",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                  }
                : {
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                  }
            }
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <img
              src={
                (open && clickItem.includes(item.id)) || done.includes(item.id)
                  ? item.src
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXn5H7ZLYyeYnfiVCuS9oneO5hnMnuJu3zfRSWJLcnAx2BtBOMBqmKlLLoX0uiG0Aodw&usqp=CAU"
              }
              alt={item.name}
              className="w-full h-full object-cover"
              style={{
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        ))}
      </div>
      <div className="border-t border-white mt-5 " />
      <GameResult
        time={time}
        handleRefresh={handleRefresh}
        flip={flips.length / 2}
        selected={selected}
        handleChange={handleChange}
        options={options}
      />
    </div>
  );
}
