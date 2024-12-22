import { Button } from "../Buttons/button";
import imagePruebaUser from "../../../../public/images/avatars/image-juliusomo.webp";
import "./cardUserComment.css";

export function CardUserComment() {
  return (
    <>
      <article className="content__allCardUserComment">
        <div className="bx-userAvatar">
          <img src={imagePruebaUser} alt="" className="userAvatar" />
        </div>

        <textarea
          className="bx-sectionUserComment"
          placeholder="Add comment..."
        ></textarea>

        <div className="bx-btn">
          <Button text={"send"} />
        </div>
      </article>
    </>
  );
}
