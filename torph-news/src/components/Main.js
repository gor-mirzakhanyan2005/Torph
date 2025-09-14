import { useEffect, useState } from 'react';
import Top from './Top';
import Nav from './Nav';
import styles from '../stylesheets/Main.module.scss';
import Footer from './Footer';
import supabase from '../config/supabaseClient';
import Pagination from './Pagination';
import Pagination2 from './Pagination2';

const Main = () => {
  const [trending, setTrending] = useState([]);
  const [editorsPick, setEditorsPick] = useState([]);
  const [totalNearFuture, setTotalNearFuture] = useState([]);
  const [totalWorldNews, setTotalWorldNews] = useState([]);
  const [region, setRegion] = useState("eu");

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  const [currentNearFuture, setCurrentNearFuture] = useState(1);
  const [articlesNearFuture, setArticlesNearFuture] = useState(3);
  const [nearFuturePerPage, setNearFuturePerPage] = useState(3);

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;

  const lastNearFutureIndex = currentNearFuture * nearFuturePerPage
  const firstNearFutureIndex = lastNearFutureIndex - nearFuturePerPage;

  useEffect(() => {
    const getTrending = async() => {
        const {data, error} = await supabase.from("Trending").select("*");
        setTrending(data);
        console.log(data);
    }
    const getEditorsPick = async() => {
        const {data, error} = await supabase.from("EditorsPick").select("*");
        setEditorsPick(data);
        console.log(data)
    }
    const getNearFuture = async() => {
        const{data, error} = await supabase.from("NearFuture").select("*");
        setTotalNearFuture(data);
        console.log(data)
    }

    fetch(`https://newsapi.org/v2/everything?q=${region}&language=en&apiKey=11210e1009bd45729e5125745f534c66`)
    .then(res => res.json())
    .then(data => {
        setTotalWorldNews(data.articles);
        console.log(data.articles);
    })

    getEditorsPick();
    getTrending();
    getNearFuture();
  }, [region]);
    
    const worldNews = totalWorldNews.slice(firstArticleIndex, lastArticleIndex);
    const nearFuture = totalNearFuture.slice(firstNearFutureIndex, lastNearFutureIndex);
    const shuffledTrending = trending.sort(() => 0.5 - Math.random());

  return (
    <>
        <Top />
        <Nav region={region} setRegion={setRegion}/>
        <main className={styles.mainBg}>
            <article className={styles.mainFeatured}>
                <div className={styles.featuredText}>
                    <h1>FEATURED</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec faucibus sem. Cras et ornare metus. 
                        Duis rutrum ipsum eu turpis sagittis, scelerisque tristique mi dignissim. 
                        Donec semper dui at justo pretium, ut semper nisi mollis. 
                        Proin ac porttitor arcu. Nulla vitae dui vel tortor eleifend tristique eget id nunc. 
                        Nullam justo diam, vehicula et elit quis, aliquam tempor mi. 
                        Quisque ut ipsum nisl. </p>
                </div>
                <img src="https://fastly.picsum.photos/id/820/694/541.jpg?hmac=ZWBbaVyy1p2nIEHPc1iwoXPB0QEGCkFOw-Nf4iwExjk" /> 
            </article>
            <section className={styles.trendingSection}>
                <h1>TRENDING</h1>
                <ul className={styles.trendingList}>
                    {shuffledTrending.slice(1, 4).map((article) => {
                        return (
                            <li key={article.id}>
                                <article className={styles.trendingArticle}>
                                    <img src={article.image} />
                                    <div className={styles.trendingFilter}></div>
                                    <h2>{article.title}</h2>
                                    <p>{article.description}</p>
                                </article>
                            </li>
                        )
                    })} 
                </ul>
            </section>
            <section className={styles.editorsPick}>
                <div className={styles.editorsPickBg}>
                    <h1>EDITOR'S PICK</h1>
                    {editorsPick.length > 0 && (
                        <article className={styles.editorsArticle}>
                            <img src={editorsPick[0].image} />
                            <div className={styles.editorsFilter}></div>
                            <h2>{editorsPick[0].title}</h2>
                            <p>{editorsPick[0].description}</p>
                        </article>)}
                </div>
            </section>
            <section className={styles.worldRightNow}>
                <h1>WORLD RIGHT NOW</h1>
                <ul className={styles.newsArticles}>
                    {worldNews?.map((article) => {
                        return (
                            <li>
                                <article className={styles.newsArticle}>
                                    <img src={article.urlToImage} />
                                    <div className={styles.newsFilter}></div>
                                    <h2>{article.title}</h2>
                                </article>
                            </li>
                        )
                    })}
                </ul>
                <Pagination 
                    worldNews={totalWorldNews.length} 
                    articlesPerPage={articlesPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}/>
            </section>
            <section className={styles.nearFuture}>
                <h1>NEAR FUTURE</h1>
                <ul className={styles.nearFutureList}>
                    {nearFuture.map((article) => {
                        return (
                            <li>
                                <article className={styles.nearFutureArticle}>
                                    <img src={article.image} />
                                    <div className={styles.nearFutureFilter}></div>
                                    <h2>{article.title}</h2>
                                    <p>{article.text}</p>
                                </article>
                    </li>
                        )
                    })} 
                </ul>
                <Pagination2 
                    nearFuture={totalNearFuture.length}
                    nearFuturePerPage={nearFuturePerPage}
                    currentNearFuture={currentNearFuture}
                    setCurrentNearFuture={setCurrentNearFuture}/>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Main