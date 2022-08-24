import { AuthPage, AuthProvider, Refine } from "@pankod/refine-core";
import { dataProvider } from "@pankod/refine-supabase";

import routerProvider from "@pankod/refine-react-router-v6";
import "@pankod/refine-antd/dist/styles.min.css";

import { PostList, PostCreate, PostEdit } from "./pages/posts";
import { RegisterPage } from "./pages/auth";
import { ForgotPasswordPage } from "./pages/auth/forgotPassword";
import { ExamplePage } from "./pages/example";
import { UpdatePasswordPage } from "./pages/auth/updatePassword";
import { supabaseClient } from "././utility";

const App: React.FC = () => {
    const authProvider: AuthProvider = {
        login: async ({ email, password, providerName }) => {
            let params;
            if (providerName) {
                params = {
                    provider: providerName,
                };
            } else {
                params = {
                    email,
                    password,
                };
            }

            const { user, error } = await supabaseClient.auth.signIn(params);

            if (error) {
                return Promise.reject(error);
            }

            if (user) {
                return Promise.resolve();
            }
        },
        register: async ({ email, password }) => {
            const { user, error } = await supabaseClient.auth.signUp({
                email,
                password,
            });

            if (error) {
                return Promise.reject(error);
            }

            if (user) {
                return Promise.resolve();
            }
        },
        updatePassword: async (params: any) => {
            const { error, data } = await supabaseClient.auth.api.updateUser(
                params.token,
                {
                    password: params.newPassword,
                },
            );

            if (error) {
                return Promise.reject(error);
            }

            if (data) {
                return Promise.resolve();
            }
        },
        resetPassword: async ({ email }) => {
            const { data, error } =
                await supabaseClient.auth.api.resetPasswordForEmail(email, {
                    redirectTo: "http://localhost:3000/auth/update-password",
                });
            if (error) {
                return Promise.reject(error);
            }

            console.log(data);

            if (data) {
                return Promise.resolve();
            }
        },
        logout: async () => {
            const { error } = await supabaseClient.auth.signOut();

            if (error) {
                return Promise.reject(error);
            }

            return Promise.resolve("/");
        },
        checkError: () => Promise.resolve(),
        checkAuth: () =>
            localStorage.getItem("email")
                ? Promise.resolve()
                : Promise.reject(),
        getPermissions: () => Promise.resolve(["admin"]),
        getUserIdentity: () =>
            Promise.resolve({
                id: 1,
                name: "Jane Doe",

                avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
            }),
    };

    return (
        <Refine
            routerProvider={{
                ...routerProvider,
                routes: [
                    { path: "/example", element: <ExamplePage /> },
                    { path: "/auth/register", element: <RegisterPage /> },
                    {
                        path: "/auth/forgot-password",
                        element: <ForgotPasswordPage />,
                    },
                    {
                        path: "/auth/update-password",
                        element: <UpdatePasswordPage />,
                    },
                ],
            }}
            dataProvider={dataProvider(supabaseClient)}
            authProvider={authProvider}
            AuthPage={(props) => (
                <AuthPage
                    {...props}
                    registerLink="/auth/register"
                    resetPasswordLink="/auth/forgot-password"
                    updatePasswordLink="/auth/update-password"
                    providers={[
                        {
                            name: "github",
                            label: "Github",
                            icon: (
                                <img src="https://img.icons8.com/color/48/000000/github.png" />
                            ),
                        },
                    ]}
                />
            )}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    canDelete: true,
                },
            ]}
            disableTelemetry={true}
        />
    );
};

export default App;
