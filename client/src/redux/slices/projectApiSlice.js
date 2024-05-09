import { apiSlice } from "./apiSlice";

const PROJECTS_URL = "/project"

export const projectApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllProjects: builder.query({
            query: ({ strQuery }) => ({
                url: `${PROJECTS_URL}?stage=${strQuery}`,
                method: "GET",
                credentials: "include",
            }),
        }),

        createProject: builder.mutation({
            query: ({ data }) => ({
                url: `${PROJECTS_URL}/create`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        getSingleProject: builder.query({
            query: (id) => ({
                url: `${PROJECTS_URL}/${id}`,
                method: "GET",
                credentials: "include",
            }),
        }),
    }),
});

export const {
    useGetAllProjectsQuery,
    useCreateProjectMutation,
    useGetSingleProjectQuery,
} = projectApiSlice;