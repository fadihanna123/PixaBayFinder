import { atom } from "recoil";
import { IList, SearchForm } from "typings";

export const searchFormState = atom<SearchForm>({
  key: "searchFormState",
  default: {
    query: "",
  },
});

export const listState = atom<IList | null>({
  key: "listState",
  default: null,
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});
