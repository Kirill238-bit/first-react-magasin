import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'




 export interface Chimical {
    id: number;
    title: string;
    img:any;
    kod:string;
    maker:string;
    brend:string;
    type:string;
    price: number;
  }
  export interface CatalogChimicalsProps {
    chimicals: {
      id: number;
      title: string;
      img: string;
      kod: string;
      maker: string;
      brend: string;
      type:string;
      price: number;
    }[];
  }
  export const chimicals = [
    {
        id: 1,
        title:'AOS Ср-во для мытья посуды Апельсин+мята',
        img:'image21.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76
      },
      {
        id:2,
        title:'AOS средство для мытья посуды Crystal',
        img:'image21-2.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76
      },
      {
        id:3,
        title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        img:'image21-3.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:4,
        title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        img:'image21-4.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:5,
        title:'AOS Ср-во для мытья посуды Апельсин+мята',
        img:'image21.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:6,
        title:'AOS средство для мытья посуды Crystal',
        img:'image21-2.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:7,
        title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        img:'image21-3.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:8,
        title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        img:'image21-4.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id: 9,
        title:'AOS Ср-во для мытья посуды Апельсин+мята',
        img:'image21.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:10,
        title:'AOS средство для мытья посуды Crystal',
        img:'image21-2.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:11,
        title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        img:'image21-3.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:12,
        title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        img:'image21-4.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:13,
        title:'AOS Ср-во для мытья посуды Апельсин+мята',
        img:'image21.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:14,
        title:'AOS средство для мытья посуды Crystal',
        img:'image21-2.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:15,
        title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        img:'image21-3.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
      {
        id:16,
        title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        img:'image21-4.png',
        kod:'Штрихкод: 4604049097548',
        maker:'Производитель: Нэфис',
        brend:'Бренд: AOS',
        type:'уход за телом',
        price:48.76 
      },
  ];
  const CatalogCHimikals: React.FC <CatalogChimicalsProps>= ({ chimicals }) => {
    const [sortedChimicals, setSortedChimicals] = useState<Chimical[]>([]);
    const [sortBy, setSortBy] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("");
    const history = useNavigate()

    

    useEffect(() => {
      let sortedChimicalsCopy = [...chimicals];
      if (sortBy === "по названию") {
        sortedChimicalsCopy.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === "по возрастанию") {
        sortedChimicalsCopy.sort((a, b) => a.price - b.price);
      }else if (sortBy === "по убыванию") {
        sortedChimicalsCopy.sort((a, b) => b.price + a.price);
      }
      if (selectedType !== "") {
        sortedChimicalsCopy = sortedChimicalsCopy.filter(chimical => chimical.type === selectedType);
      }
      
      setSortedChimicals(sortedChimicalsCopy);
    }, [sortBy, selectedType]); 

    return (
      <div className='shop'>
        <nav >
          <ul className='typeBar'>
            <ol onClick={() => setSortBy("по названию")}className='navigation'>по названию</ol>
            <ol onClick={() => setSortBy("по возрастанию")}className='navigation'>по возрастанию</ol>
            <ol onClick={() => setSortBy("по убыванию")}className='navigation'>по убыванию</ol>
            <ol onClick={() => setSelectedType("уход за телом")}className='navigation'>уход за телом</ol>
            <ol onClick={() => setSelectedType("уход за руками")}className='navigation'>уход за руками</ol>
            <ol onClick={() => setSelectedType("уход за ногами")}className='navigation'>уход за ногами</ol>
            <ol onClick={() => setSelectedType("уход за лицом")}className='navigation'>уход за лицом</ol>
          </ul>
        </nav>
        <div className='shop-products-conteiner'>
        {sortedChimicals.map((chimical) => (
          <div key={chimical.id} className="shop-products" >
          <img src={"./images/"+ chimical.img} alt='product' onClick={() => history('/item'+ '/:'+ chimical.id)}/><br/>
          <h3>{chimical.title}</h3><br/>
          <b>{chimical.kod}</b><br/>
          <b>{chimical.maker}</b><br/>
          <b>{chimical.brend}</b><br/>
          <p>{chimical.price+'₸'}</p>
          <button className='navigation'>в корзину</button>
          </div>
        ))}
        </div>
      </div>

    );
  };
  
  export default CatalogCHimikals;

