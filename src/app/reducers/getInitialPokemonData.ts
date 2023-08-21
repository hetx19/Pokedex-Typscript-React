import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../utils/constants";

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const { data } = await axios.get(pokemonsRoute);
      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);
