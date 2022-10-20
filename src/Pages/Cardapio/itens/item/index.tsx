import styles from "./item.module.scss"
import cardapio from "../itens.json"
import classNames from "classnames"

type ICardapio = typeof cardapio[0]

export default function Item({title,photo,description,category,price,serving,size}: ICardapio) {
    return (
    <div className={styles.item}>
        <div className={styles.item__imagem}>
            <img src={photo} alt={title} />
        </div>

        <div className={styles.item____descricao}>
            <div className={styles.item__titulo}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.item__tags}>
                <div className={classNames({
                    [styles.item__tipo]: true,
                    [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
                })}>
                    {category.label}
                </div>

                <div className={classNames({
                    [styles.item__porcao]: true
                })}>
                    {size}g
                </div>

                <div className={classNames({
                    [styles.item__qtdpessoas]:true
                })}>
                    serve {serving} {serving === 1 ? "pessoa": "pessoas"}
                </div>

                <div className={classNames({
                    [styles.item__valor]: true
                })}>
                    R${price.toFixed(2)}
                </div>
            </div>
        </div>

    </div>
    )
}