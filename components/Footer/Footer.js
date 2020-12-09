import styles from "./Footer.module.css";

export default function Footer() {

  return (
    <div className={styles.footer}>
     <div className={styles.footerTop}>
			<div className={styles.info}>
				<p>ИП Могилевич Д.С.</p>
				<p>РБ, г. Волковыск, ул. Замковая д. 18</p>
				<p>св-во о гос. регистрации N 44444444 от 01.01.2001</p>
				<p>выдано Волковысским райисполкомом.</p>
				<p>Дата регистрации в торговом реестре РБ 25.07.2018 номер 422189</p>
			</div>	
			<div className={styles.socials}>
				<div className={styles.socialsContainer}>
					<img className={styles.image} src="./vk.svg" />
					<img className={styles.image} src="./inst.svg" />
					<img className={styles.image} src="./telegram.svg" />
				</div>
			</div>
		 </div>
		 <div className={styles.footerBottom}>
			<p className={styles.copyright}>© 2018 GREEN PENGUIN</p>
			<p className={styles.email}>info@greenpenguin.by</p>
		 </div>
    </div>    
    
  )
}