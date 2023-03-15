import { Store } from "../core/heropy";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://heropy.blog/css/images/logo.png",
  name: "HOBY / SongHoYeop",
  email: "hoby@nate.com",
  blog: "https://heropy.blog",
  github: "https://github.com/hobyhoby",
  repository: "https://github.com/hobyhoby/omdb",
});
