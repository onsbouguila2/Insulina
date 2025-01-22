import React from "react";
import articleImg from "../../assets/articleImg.png";
import ArticleCard from "./ArticleCard";
const ArticleSection = () => {
  const articles = [
    {
      title:
        "Optimisez Votre Dosage d’Insuline avec Notre Nouvelle Application",
      date: "Apr 8, 2023",
      content:
        "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab il",
      img: articleImg,
    },
    {
      title: "Comment Suivre Vos Repas Peut Améliorer Votre Gestion du Diabète",
      date: "Apr 8, 2023",
      content:
        "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab il",
      img: articleImg,
    },
    {
      title:
        "Une Revolution a Votre Portee Application mobile",
      date: "Apr 8, 2023",
      content:
        "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab il",
      img: articleImg,
    },
  ];
  return (
    <div className="w-full text-center mt-5 p-5">
      <p className="card-subtitle">Nos articles</p>
      <h1 className="section-title">Decouvrir nos dernieres articles</h1>
      {articles.map((article, index) => (
        <div key={index} className="w-full">
          <ArticleCard article={article} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ArticleSection;
