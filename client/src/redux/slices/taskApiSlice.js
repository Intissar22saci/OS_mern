import { apiSlice } from "./apiSlice";

const TASKS_URL = "/task"

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllTasks: builder.query({
            query: ({ strQuery }) => ({
                url: `${TASKS_URL}?stage=${strQuery}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        createTask: builder.mutation({
            query: ({ data }) => ({
                url: `${TASKS_URL}/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        duplicateTask: builder.mutation({
            query: ({ id }) => ({
                url: `${TASKS_URL}/duplicate/${id}`,
                method: "POST",
                body: {},
                credentials: "include",
            }),
        }),

        updateTask: builder.mutation({
            query: ({ data }) => ({
                url: `${TASKS_URL}/update/${data._id}`,
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        trashTask: builder.mutation({
            query: ({ id }) => ({
                url: `${TASKS_URL}/${id}`,
                method: "PUT",
                credentials: "include",
            }),
        }),

        getSingleTask: builder.query({
            query: (id) => ({
                url: `${TASKS_URL}/${id}`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useGetDashboardStatsQuery,
    useGetAllTasksQuery,
    useCreateTaskMutation,
    useDuplicateTaskMutation,
    useUpdateTaskMutation,
    useTrashTaskMutation,
    useGetSingleTaskQuery,
} = taskApiSlice;