import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM4MzU0OSwiZXhwIjoxOTU4OTU5NTQ5fQ.Zrl4l7f28-B6co-P7Jo2AONf1CTtYE1L2ct-Zx6zJqY';
const SUPABASE_URL = 'https://dtdunocmufdikgwocltq.supabase.co';
const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY); 

function escutaMensagensRealTime(adicionaMensagem) {
    return supabase
        .from('mensagens')
        .on('INSERT', (respostaLive) => {
            adicionaMensagem(respostaLive.new);
        })
        .subscribe();
}

function GlobalStyle() {
    return (
         <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
    `}</style>
    );
}

export default function ChatPage() {
    const roteamento = useRouter('');
    const loggedUser = roteamento.query.username;
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
    

    React.useEffect(() => {
        supabase
         .from('mensagens')
         .select('*')
         .order('id', {ascending: false})
         .then(({ data }) => {
             setListaDeMensagens(data);
         });

    
        const subscription = escutaMensagensRealTime((novaMensagem) => {
            setListaDeMensagens((valorAtualDaLista) => {
                return [
                    novaMensagem,
                    ...valorAtualDaLista,
                ]
            });
        });

        return () => {
            subscription.unsubscribe();
        }
    }, []);
    
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            //id: listaDeMensagens.length + 1,
            de: loggedUser,
            texto: novaMensagem,
        };

        supabase
            .from('mensagens')
            .insert([
                mensagem
            ])
            .then( ({data}) => {
                //setListaDeMensagens([ data, ...listaDeMensagens ]);
                console.log('Criando mensagem: ', data);
            });

        
        setMensagem('');
    }

    return (

        <>
            <GlobalStyle />
            <Box
            
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: `url(https://miro.medium.com/max/2560/0*yjzJavtODjSZ1T7E)`,
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                    color: appConfig.theme.colors.neutrals['000']
                }}
                
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        borderRadius: '5px',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                        height: '70%',
                        maxWidth: '80%',
                        maxHeight: '80vh',
                        padding: '32px',
                    }}
                >
                    <Header />
                    <Box
                        styleSheet={{
                            position: 'relative',
                            display: 'flex',
                            flex: 1,
                            height: '50%',
                            backgroundColor: appConfig.theme.colors.neutrals[600],
                            flexDirection: 'column',
                            borderRadius: '5px',
                            padding: '10px',
                        }}
                    >
                        <MessageList mensagens={listaDeMensagens} />
                        {/* {listaDeMensagens.map((mensagemAtual) => {
                            return (
                                <li key={mensagemAtual.id}>
                                    {mensagemAtual.de}: {mensagemAtual.texto}
                                </li>
                            )
                        })} */}
                        <Box
                            as="form"
                            styleSheet={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingTop: '1px',
                            }}
                        >
            
                            <TextField
                                value={mensagem}
                                onChange={(event) => {
                                    const valor = event.target.value;
                                    setMensagem(valor);
                                }}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        handleNovaMensagem(mensagem);
                                    }
                                }}
                                placeholder="Type anything..."
                                type="textarea"
                                styleSheet={{
                                    width: '100%',
                                    border: '0',
                                    resize: 'none',
                                    borderRadius: '5px',
                                    padding: '6px 8px',
                                    backgroundColor: appConfig.theme.colors.neutrals[700],
                                    marginRight: '12px',
                                    color: appConfig.theme.colors.neutrals[200],
                                    focus: {
                                        border:'1px solid',
                                        borderColor: appConfig.theme.colors.primary[900],
                                    }
                                }}
                            />
                            <Button
                                onClick={() => {
                                    handleNovaMensagem(mensagem);
                                }}
                                styleSheet={{
                                    borderRadius: '10%',
                                    padding: '0 3px 0 0',
                                    minWidth: '60px',
                                    minHeight: '45px',
                                    fontSize: '30px',
                                    marginBottom: '8px',
                                    lineHeight: '0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center', 
                                    
                                }}
                                type='button'
                                label='Send'
                                buttonColors={{
                                    contrastColor: appConfig.theme.colors.primary[700],
                                    mainColor: appConfig.theme.colors.neutrals[700],
                                    mainColorLight: appConfig.theme.colors.neutrals[700],
                                    mainColorStrong: appConfig.theme.colors.neutrals[300],

                                }}
                            />
                            <ButtonSendSticker 
                                onStickerClick={(sticker) => {
                                   handleNovaMensagem(':sticker:' + sticker);
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    //console.log(props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[200],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>

                        {mensagem.texto.startsWith(':sticker:') ? (
                                <Image src={mensagem.texto.replace(':sticker:', '')} 
                                styleSheet={{
                                    maxWidth: '200px',
                                    maxHeight: '200px',
                                    borderRadius: '15%',
                                    display: 'inline-block',
                                    margin: '0 40px 0',
                                  }}
                                />
                            ) : (
                                mensagem.texto
                        )} 
                       
                    </Text>
                );
            })}
        </Box>
    );
}