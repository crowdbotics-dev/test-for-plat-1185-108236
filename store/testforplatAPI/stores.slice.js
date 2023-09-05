import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_stores_list = createAsyncThunk(
  "stores/api_v1_stores_list",
  async payload => {
    const response = await apiService.api_v1_stores_list(payload)
    return response.data
  }
)
export const api_v1_stores_create = createAsyncThunk(
  "stores/api_v1_stores_create",
  async payload => {
    const response = await apiService.api_v1_stores_create(payload)
    return response.data
  }
)
export const api_v1_stores_retrieve = createAsyncThunk(
  "stores/api_v1_stores_retrieve",
  async payload => {
    const response = await apiService.api_v1_stores_retrieve(payload)
    return response.data
  }
)
export const api_v1_stores_update = createAsyncThunk(
  "stores/api_v1_stores_update",
  async payload => {
    const response = await apiService.api_v1_stores_update(payload)
    return response.data
  }
)
export const api_v1_stores_partial_update = createAsyncThunk(
  "stores/api_v1_stores_partial_update",
  async payload => {
    const response = await apiService.api_v1_stores_partial_update(payload)
    return response.data
  }
)
export const api_v1_stores_destroy = createAsyncThunk(
  "stores/api_v1_stores_destroy",
  async payload => {
    const response = await apiService.api_v1_stores_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_stores_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_stores_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_stores_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_stores_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_stores_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_stores_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_stores_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_stores_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_stores_list,
  api_v1_stores_create,
  api_v1_stores_retrieve,
  api_v1_stores_update,
  api_v1_stores_partial_update,
  api_v1_stores_destroy,
  slice: storesSlice
}
