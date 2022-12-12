import { FormInstance } from "antd";
import { useEffect, useState } from "react";
import { TypeNotification } from "../../shared/emuns";
import { NotificationCustom } from "../../shared/function";
import ButtonCustom from "../ButtonCustom";
import styles from './index.module.scss'

// types params input custom
type IPropsInput = {
    classCustomInput?: string,
    onChangeImage?: any,
    url?: string,
    name?: string,
    required?: boolean,
    sizeImage?: number,
    errSizeImage?: string,
}

// input custom use all in project
const InputImage = (
    {
        classCustomInput,
        onChangeImage,
        url,
        name,
    }: IPropsInput
) => {
    const [urlImage, setUrlImage] = useState<string>('')

    useEffect(() => {
        if (url) {
            setUrlImage(url)
        }
    }, []);

    const listCssInputImage = () => {
        let listCss = styles.inputImageCustom
        if (classCustomInput) {
            listCss += ' ' + classCustomInput
        }
        return listCss
    }

    const chooseImage = () => {
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/png, image/jpg, image/jpeg');
        input.onchange = (e: any) => {
            let files = e.target.files[0];
            const { type, size } = files
            let linkImage: any = '';
            const listTypeImageAccept = ['image/png', 'image/jpg', 'image/jpeg']
            if (!listTypeImageAccept.includes(type)) {
                NotificationCustom({ type: TypeNotification.error, message: '写真 が無効です。画像をアップロードしてください' })
                return
            }
            // if (size > sizeImage) {
            //     NotificationCustom({ type: typeNotification.error, message: errSizeImage })
            //     return
            // }
            // // FileReader support
            if (FileReader && files) {
                let fr = new FileReader();
                fr.onload = function () {
                    linkImage = fr.result;
                    onChangeImage(name, linkImage)
                    setUrlImage(linkImage)
                };
                fr.readAsDataURL(files);
            }
        };
        input.click();
    }

    return (
        <div className={listCssInputImage()}>
            <div
                className={styles.previewImage}
                onClick={chooseImage}
                style={{ border: `${urlImage ? 'transparent' : '1px solid #23418C'}` }}
            >
                {
                    urlImage &&
                    <img src={urlImage} alt="image-error-olive" />
                }
            </div>
            <div className={styles.actionImage}>
                <ButtonCustom
                    title="削除"
                    color="#B94040"
                    disabled={!urlImage}
                    onClick={() => {
                        setUrlImage('')
                        onChangeImage(name, '')
                    }}
                />
            </div>
        </div>
    )
}

export default InputImage
