import { useState } from 'react'
import './App.css'
import CustomNav from './components/CustomNav'
import CustomMenu from "./components/Custommenu"

function App() {
  const [count, setCount] = useState(0)
  let ovqatlar = [{nomi:"Lag'mon" ,rasimi: "https://avatars.mds.yandex.net/get-entity_search/5395055/1132301317/SUx182_2x", qisqaMalumot:"dfgdfg" , batafsilMalumot:"dfg",vaqti:"5",narxi:"10000"},
    {nomi:"ggd" ,rasimi: "https://avatars.mds.yandex.net/get-entity_search/5395055/1132301317/SUx182_2x", qisqaMalumot:"loremedew edwed ewdwed ewdwdw ewdwd edwdwe edwwedxwe edwewe" , batafsilMalumot:"dfg",vaqti:"5",narxi:"10000"},
    {nomi:"ggd" ,rasimi: "https://avatars.mds.yandex.net/get-entity_search/5395055/1132301317/SUx182_2x", qisqaMalumot:"dfgdfg" , batafsilMalumot:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut neque eaque ex odio facere laudantium earum expedita, dignissimos fuga optio est magni harum voluptates. Necessitatibus non incidunt itaque id omnis voluptates sint fuga veritatis debitis sunt. Laboriosam asperiores sed earum eum quos rerum officia rem harum ut culpa possimus debitis obcaecati ipsam temporibus perspiciatis minima consequuntur ratione laudantium nihil magni, similique dolores at facere aliquam! Molestias modi saepe veritatis quaerat atque aut, reprehenderit molestiae quae inventore, illum nemo quo, explicabo omnis repellat debitis voluptatum praesentium corporis! Quas accusantium optio dignissimos dolor quidem sed, libero obcaecati provident, voluptates porro inventore molestias!",vaqti:"5",narxi:"10000"},
    {nomi:"ggd" ,rasimi: "https://avatars.mds.yandex.net/get-entity_search/5395055/1132301317/SUx182_2x", qisqaMalumot:"dfgdfg" , batafsilMalumot:"dfgdds dfdfe fdf dsf df sd ffsdf 343242 fd f ref 3 43 r3ef r  rfer dsc sdc sdc sfvrtvrf vrgfvrfv rgvrgvrg ",vaqti:"5",narxi:"10000"},

  ]

  return (
    <>
      <body>
        <header>
          <nav className="navBar">
            <CustomNav/> 
          </nav>
          <section className='Container'>
              <div className="menues">
          {ovqatlar.map((item, index) => (
                      <CustomMenu 
                        key={index}
                        Image={item.rasimi} 
                        nomi={item.nomi} 
                        cifo={item.batafsilMalumot}
                        time={item.vaqti}
                        kifo={item.qisqaMalumot}
                        price={item.narxi}

                      />
                    ))}
              </div>
          </section>
        </header>
      </body>
    </>
  )
}

export default App
