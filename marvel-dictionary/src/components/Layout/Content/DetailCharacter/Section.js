import React from 'react';
import { Layout } from 'antd';
import CharactersLoading from '../Characters/Loading';
const { Content } = Layout;

const DetailCharacterSection = (props) => {
    const detailChar = !props.data.loading && props.data.payload.data.results[0];
    return (
        <Content style={{ background: '#e23636', minHeight: 500, marginTop: '64px', paddingTop: '20px' }}>
            {
                props.data.loading ?
                <CharactersLoading /> :
                <div>
                    <img
                        src={`${detailChar.thumbnail.path}.${detailChar.thumbnail.extension}`}
                        alt={detailChar.name}
                        className="detail--logo-character"
                    />
                    <h1 className="detail--title-character">
                        {detailChar.name}
                    </h1>
                    <h3 className="detail--title-character">
                        Total's Comics : {detailChar.comics.available}
                    </h3>
                    <h3 className="detail--title-character">
                        Total's Series : {detailChar.series.available}
                    </h3>
                    <h3 className="detail--title-character">
                        Total's Stories : {detailChar.stories.available}
                    </h3>
                    <h3 className="detail--title-character">
                        Total's Events : {detailChar.events.available}
                    </h3>
                </div>
            }
        </Content>
    )
    // if (props.loading === false) {
    //     const detailChar = props.detailChar.payload.data.results[0];
    //     console.log(detailChar)
    //     return (
    //         <Content style={{ background: '#e23636', minHeight: 500, marginTop: '64px' }}>
    //             <Avatar
    //                 size="large"
    //                 src={`${detailChar.thumbnail.path}.${detailChar.thumbnail.extension}`}
    //             />
    //             TESTTTT
    //         </Content>
    //     )
    // }
    // return <CharactersLoading />;
}

export default DetailCharacterSection;