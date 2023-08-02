import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCategorie, deleteCategorie, editCategorie, fetchCategorieById, fetchCategories } from "../services/CategorieService";

export const getCategories = createAsyncThunk(
    "scategorie/getCategories",
    async (_, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetchCategories();
  
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const createCategorie = createAsyncThunk(
    "scategorie/createCategorie",
    async (scategorie, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await addCategorie(scategorie);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const delCategorie = createAsyncThunk(
    "scategorie/delCategorie",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        await deleteCategorie(id);
        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const updateCategorie = createAsyncThunk(
    "scategorie/updateCategorie",
    async (scategorie, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await editCategorie(scategorie);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const findCategorieByID = createAsyncThunk(
    "scategorie/findCategorieByID",
    async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await fetchCategorieById(id);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const categorieSlice = createSlice({
    name: "scategorie",
    initialState: {
      categories: [],
      scategorie: {},
      isLoading: false,
      success: null,
      error: null,
    },
    extraReducers: (builder) => {
        //get categories
        builder
          .addCase(getCategories.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.categories = action.payload;
          })
          .addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log("impossible de se connecter au serveur");
          })
          //insertion scategorie
          .addCase(createCategorie.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.success = null;
          })
          .addCase(createCategorie.fulfilled, (state, action) => {
            state.categories.push(action.payload);
            state.isLoading = false;
            state.error = null;
            state.success = action.payload;
          })
          .addCase(createCategorie.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.success = null;
          })
          //Modification scategorie
          .addCase(updateCategorie.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.success = null;
          })
          .addCase(updateCategorie.fulfilled, (state, action) => {
            state.categories = state.categories.map((item) =>
              item._id === action.payload._id ? action.payload : item
            );
            state.isLoading = false;
            state.error = null;
            state.success = action.payload;
          })
          //Delete scategorie
          .addCase(delCategorie.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(delCategorie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.categories = state.categories.filter(
              (item) => item._id !== action.payload
            );
          })
          .addCase(delCategorie.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          //Fetch scategorie
          .addCase(findCategorieByID.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(findCategorieByID.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.scategorie = action.payload;
          });
      },
    });
    export default categorieSlice.reducer;
