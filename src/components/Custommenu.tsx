import { createRoot } from "react-dom/client";

const CustomMenu: React.FC<{ Image: string; nomi: string; time: string; kifo: string; cifo: string; price: string }> = ({ Image, nomi, time , kifo ,price,cifo}) => {
    
    let pul = "So'm";
    return (
        <section className="Menu">
            <div className="menuCon">
                <p>{nomi}</p>
                <div className="picture">
                    <img src={Image} alt="Menimcha hali tayyor emas" className="picture" />
                </div>
                <div className="IfoCon">
                    <div className="price">
                        <h2 className="priceText">{price} {pul}</h2>
                    </div>
                    <div className="timeCon">
                        <h2 className="timeText">{time} daqiqada tayyor bo'ladi</h2>
                        <h2 className="IfoText">
                            {kifo}
                        </h2>
                        <button
                            type="button"
                            className="moreIfo"
                            onClick={() => alert(cifo)
                            }>
                            Batafsilroq ma'lumot
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomMenu