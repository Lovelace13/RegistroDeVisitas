--
-- PostgreSQL database dump
--

-- Dumped from database version 11.21
-- Dumped by pg_dump version 11.21

-- Started on 2023-09-12 20:31:04

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 198 (class 1259 OID 24604)
-- Name: authuser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.authuser (
    email character varying(50),
    "contraseña" character varying(250)
);


ALTER TABLE public.authuser OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 24661)
-- Name: authusers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.authusers (
    id integer NOT NULL,
    email character varying(50),
    "contraseña" text
);


ALTER TABLE public.authusers OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 24659)
-- Name: authusers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.authusers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.authusers_id_seq OWNER TO postgres;

--
-- TOC entry 2856 (class 0 OID 0)
-- Dependencies: 203
-- Name: authusers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.authusers_id_seq OWNED BY public.authusers.id;


--
-- TOC entry 197 (class 1259 OID 24598)
-- Name: departamentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departamentos (
    iddept integer NOT NULL,
    coddepartamento character(3),
    nombredepartamento character varying(100)
);


ALTER TABLE public.departamentos OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 24596)
-- Name: departamentos_iddept_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departamentos_iddept_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departamentos_iddept_seq OWNER TO postgres;

--
-- TOC entry 2857 (class 0 OID 0)
-- Dependencies: 196
-- Name: departamentos_iddept_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departamentos_iddept_seq OWNED BY public.departamentos.iddept;


--
-- TOC entry 200 (class 1259 OID 24633)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    iduser integer NOT NULL,
    nombre character varying(100),
    lastname character varying(100),
    rol character(1),
    email character varying(50),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 24631)
-- Name: usuarios_iduser_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_iduser_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_iduser_seq OWNER TO postgres;

--
-- TOC entry 2858 (class 0 OID 0)
-- Dependencies: 199
-- Name: usuarios_iduser_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_iduser_seq OWNED BY public.usuarios.iduser;


--
-- TOC entry 202 (class 1259 OID 24641)
-- Name: visitantes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.visitantes (
    idvisita integer NOT NULL,
    fechaingreso timestamp with time zone,
    hora time without time zone,
    nombre character varying(250),
    cedula character varying(10),
    motivo text,
    departamento character varying(100),
    estado boolean,
    novedad text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.visitantes OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 24639)
-- Name: visitantes_idvisita_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.visitantes_idvisita_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.visitantes_idvisita_seq OWNER TO postgres;

--
-- TOC entry 2859 (class 0 OID 0)
-- Dependencies: 201
-- Name: visitantes_idvisita_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.visitantes_idvisita_seq OWNED BY public.visitantes.idvisita;


--
-- TOC entry 2712 (class 2604 OID 24664)
-- Name: authusers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authusers ALTER COLUMN id SET DEFAULT nextval('public.authusers_id_seq'::regclass);


--
-- TOC entry 2709 (class 2604 OID 24601)
-- Name: departamentos iddept; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamentos ALTER COLUMN iddept SET DEFAULT nextval('public.departamentos_iddept_seq'::regclass);


--
-- TOC entry 2710 (class 2604 OID 24636)
-- Name: usuarios iduser; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN iduser SET DEFAULT nextval('public.usuarios_iduser_seq'::regclass);


--
-- TOC entry 2711 (class 2604 OID 24644)
-- Name: visitantes idvisita; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visitantes ALTER COLUMN idvisita SET DEFAULT nextval('public.visitantes_idvisita_seq'::regclass);


--
-- TOC entry 2844 (class 0 OID 24604)
-- Dependencies: 198
-- Data for Name: authuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.authuser (email, "contraseña") FROM stdin;
kmarin@correo.com	123test
\.


--
-- TOC entry 2850 (class 0 OID 24661)
-- Dependencies: 204
-- Data for Name: authusers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.authusers (id, email, "contraseña") FROM stdin;
1	rtazin@correo.com	$2b$10$woyZzSb2nycx19PAiQ5w2ue0AE1FkncqdjWXdhPfsOYCz0OJju0z6
2	kmarin@correo.com	$2b$10$ZpRJygpm2We5sSmeed7dReUbjfXbN3SJOEz.dUF7iEB3IPwZaoWhq
\.


--
-- TOC entry 2843 (class 0 OID 24598)
-- Dependencies: 197
-- Data for Name: departamentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departamentos (iddept, coddepartamento, nombredepartamento) FROM stdin;
\.


--
-- TOC entry 2846 (class 0 OID 24633)
-- Dependencies: 200
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (iduser, nombre, lastname, rol, email, "createdAt", "updatedAt") FROM stdin;
1	Carmen	Paredes	R	cparedes@correo.com	2023-09-10 19:29:59.274-05	2023-09-10 19:29:59.274-05
2	Roberto	Anton	S	ranton@correo.com	2023-09-10 19:30:17.542-05	2023-09-10 19:30:17.542-05
3	Martha	Armendaris	R	marmendaris@correo.com	2023-09-10 19:30:37.189-05	2023-09-10 19:30:37.189-05
\.


--
-- TOC entry 2848 (class 0 OID 24641)
-- Dependencies: 202
-- Data for Name: visitantes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.visitantes (idvisita, fechaingreso, hora, nombre, cedula, motivo, departamento, estado, novedad, "createdAt", "updatedAt") FROM stdin;
2	2023-08-29 19:00:00-05	09:30:00	Carmen Olivares	0258412256	visita familiar	ADM	f	N/A	2023-09-10 19:36:07.43-05	2023-09-10 19:36:07.43-05
3	2023-07-29 19:00:00-05	10:50:06	Anastasio Rafael Romero Arteaga	0926074410	Entrevista con el jefe de Administracion	ADM	f	N/A	2023-09-10 19:38:44.92-05	2023-09-10 19:38:44.92-05
4	2023-08-02 19:00:00-05	16:00:00	Carlos Alberto Tarrega Ortiz	0126276420	Inspeccion y auditoria	OPE	f	Entrego pasaporte en vez de cedula	2023-09-10 19:40:00.776-05	2023-09-10 19:40:00.776-05
\.


--
-- TOC entry 2860 (class 0 OID 0)
-- Dependencies: 203
-- Name: authusers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.authusers_id_seq', 2, true);


--
-- TOC entry 2861 (class 0 OID 0)
-- Dependencies: 196
-- Name: departamentos_iddept_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departamentos_iddept_seq', 1, false);


--
-- TOC entry 2862 (class 0 OID 0)
-- Dependencies: 199
-- Name: usuarios_iduser_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_iduser_seq', 3, true);


--
-- TOC entry 2863 (class 0 OID 0)
-- Dependencies: 201
-- Name: visitantes_idvisita_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.visitantes_idvisita_seq', 4, true);


--
-- TOC entry 2720 (class 2606 OID 24669)
-- Name: authusers authusers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authusers
    ADD CONSTRAINT authusers_pkey PRIMARY KEY (id);


--
-- TOC entry 2714 (class 2606 OID 24603)
-- Name: departamentos departamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamentos
    ADD CONSTRAINT departamentos_pkey PRIMARY KEY (iddept);


--
-- TOC entry 2716 (class 2606 OID 24638)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (iduser);


--
-- TOC entry 2718 (class 2606 OID 24649)
-- Name: visitantes visitantes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visitantes
    ADD CONSTRAINT visitantes_pkey PRIMARY KEY (idvisita);


-- Completed on 2023-09-12 20:31:04

--
-- PostgreSQL database dump complete
--

