import IconMinus from "../Icons/iconMinus";
import IconPlus from "../Icons/iconPlus";
import IconReply from "../Icons/iconReply";
import "./cardComment.css";
import imagePrueba from "../../../../public/images/avatars/image-amyrobson.webp";

export function CardComment() {
  return (
    <>
      <article className="content__allCardComments">
        <section className="bx-btns-controlsScore">
          <div className="bx-iconControlScore">
            <IconPlus className="stylesIconsControlScore" />
          </div>

          <span className="score">12</span>

          <div className="bx-iconControlScore">
            <IconMinus className="stylesIconsControlScore" />
          </div>
        </section>

        <section className="bx-sectionComments">
          <header className="bx-infoUserComment">
            <section className="infoUserComment">
              <div className="bx-avatar">
                <img src={imagePrueba} alt="" className="avatar" />
              </div>
              <span className="userName">amyrobson</span>
              <span className="userMe">you</span>
              <span className="createComment">1 month ago</span>
            </section>

            <div className="bx-replyComment">
              <IconReply className="stylesIconsControlScore" />
              <span className="reply">reply</span>
            </div>
          </header>

          <p className="comment">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </section>
      </article>
    </>
  );
}
