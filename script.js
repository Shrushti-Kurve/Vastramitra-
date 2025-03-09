document.getElementById('personalization-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const bodyType = document.getElementById('body-type').value;
    const recommendationsDiv = document.getElementById('recommendations');

    let recommendations = '';

    if (gender && bodyType) {
        recommendations = `<h2>Your Recommendations for ${gender} (${bodyType} body type)</h2><ul>`;
        
        if (gender === 'male') {
            if (bodyType === 'rectangle') {
                recommendations += `
                         <img src="https://cdn.shopify.com/s/files/1/0281/0049/3396/files/Formular_Fit_homepage_2_432_Cropped_600x600.jpg?v=1661945702" style="height:10%;width: 18%;margin-left: 15%;">
<img src="https://www.realmenrealstyle.com/wp-content/uploads/2023/03/Triangle-Body-Type.jpg" style="height:50%;width:25%;margin-left: 2%;">
<img src="https://cdn.shopify.com/s/files/1/0281/0049/3396/files/Fit-Banner-3_57e01fee-0f63-4574-83f2-bd7318e3156d_1024x1024.jpg?v=1644335933" style="height:20%;width: 30%;margin-left:2%;">
<img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/black_lavish_groom_wear_terry_rayon_sherwani_1663318195amd_40039_1-225x300.jpg" style="height:10%;width: 18%;margin-left: 15%;">
<img src="https://www.kalkifashion.com/blogs/wp-content/uploads/2023/06/pastel_peach_brocade_silk_kurta_set-m150ak1352y-sg94039_4_-729x1024.jpeg" style="height:50%;width:18%;margin-left: 5%;">
<img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/black_party_wear_black_jodhpuri_suit_in_terry_rayon_16403394265449-225x300.jpg" style="height:20%;width: 18%;margin-left:5%;">
                    </li>`;
            } else if (bodyType === 'pear') {
                recommendations += `
            </ul>
        </section>
    </section>
    <img src="https://cdn.shopify.com/s/files/1/0281/0049/3396/files/Formular_Fit_homepage_2_432_Cropped_600x600.jpg?v=1661945702" style="height:10%;width: 18%;margin-left: 15%;">
<img src="https://www.realmenrealstyle.com/wp-content/uploads/2023/03/Triangle-Body-Type.jpg" style="height:50%;width:25%;margin-left: 2%;">
<img src="https://cdn.shopify.com/s/files/1/0281/0049/3396/files/Fit-Banner-3_57e01fee-0f63-4574-83f2-bd7318e3156d_1024x1024.jpg?v=1644335933" style="height:20%;width: 30%;margin-left:2%;">
<img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/black_lavish_groom_wear_terry_rayon_sherwani_1663318195amd_40039_1-225x300.jpg" style="height:10%;width: 18%;margin-left: 15%;">
<img src="https://www.kalkifashion.com/blogs/wp-content/uploads/2023/06/pastel_peach_brocade_silk_kurta_set-m150ak1352y-sg94039_4_-729x1024.jpeg" style="height:50%;width:18%;margin-left: 5%;">
<img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/black_party_wear_black_jodhpuri_suit_in_terry_rayon_16403394265449-225x300.jpg" style="height:20%;width: 18%;margin-left:5%;">
                   `;
            } else if (bodyType === 'apple') {
                recommendations += `
                    
            </ul>
    </main>
    <img src="https://cdn.shopify.com/s/files/1/0126/8731/0907/files/casual_jeans_for_inverted_triangle_body_shape_480x480.jpg?v=1666753064" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://cdn.shopify.com/s/files/1/0126/8731/0907/files/inverted_triangle_body_shape_male_clothes_480x480.jpg?v=1666753747" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://cdn.shopify.com/s/files/1/0126/8731/0907/files/casual_pants_for_inverted_triangle_body_shape_480x480.jpg?v=1666753852" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://philltarling.com/wp-content/uploads/2024/02/article-2341031-1A48AD21000005DC-341_634x893.jpg" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/raw_silk_navy_color_groom_and_wedding_sherwani_1663317710amd_40025_1-225x300.jpg" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://1099554485.rsc.cdn77.org/upload/products/wine_color_wedding_function_solid_indo_western_1554803823sw_636_1.jpg" style="height:20%;width: 20%;margin-left: 5%;">`;
            } 
        } else if (gender === 'female') {
            if (bodyType === 'rectangle') {
                recommendations += `
                    
            </ul>
        </section>
        <img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/rouge_pink_silk_wedding_outfit_lehenga_choli_in_georgette_1653288529as2367062_1-640x853.jpg" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://cdn.shopify.com/s/files/1/0666/3041/products/0189_Bansuri-A_grande.jpg?v=1592474665" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://cdn.shopify.com/s/files/1/0666/3041/products/dsc00265_grande.jpg?v=1593010463" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://cdn.shopify.com/s/files/1/0612/2101/1630/files/DSC00615_3484a52d-8261-4e93-b309-45eb3319c2f3_480x480.jpg?v=1688062621" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://cdn.shopify.com/s/files/1/0612/2101/1630/files/peplum_dress_2f96f53b-a94e-4d24-a39f-0daa53f3d4c1_480x480.webp?v=1666389671" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://cdn.shopify.com/s/files/1/0612/2101/1630/files/Soft_neckline_480x480.jpg?v=1666388953" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://cdn.shopify.com/s/files/1/0612/2101/1630/files/Flutter_sleeves_480x480.jpg?v=1666389391" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://cdn.shopify.com/s/files/1/0612/2101/1630/files/Layered_skirt_480x480.jpg?v=1666391257" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://cdn.shopify.com/s/files/1/0612/2101/1630/files/279788_G_1626425404029_480x480.jpg?v=1666653830" style="height:20%;width: 20%;margin-left: 5%;">`;
                
            } else if (bodyType === 'pear') {
                recommendations += `
                    
            
        </section>
        <img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/stunning_silk_wedding_wear_pink_saree_1662553920284006-1-640x853.jpg" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://cdn.shopify.com/s/files/1/0666/3041/products/0066_Pakeezah-B_grande.jpg?v=1592474791" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://www.luxuryabode.com/blog/blogimages/img-31.png" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://www.datocms-assets.com/109096/1705669449-01_collage_casual-1.jpeg?dpr=2" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://www.datocms-assets.com/109096/1705669477-00_00_01_full_izq_formal-1.jpeg?dpr=2" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://www.akbrownstl.com/wp-content/uploads/2022/10/1.png" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://www.akbrownstl.com/wp-content/uploads/2022/10/Untitled-design-15.png" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://www.kaleidoscope.co.uk/blog/wp-content/uploads/2019/09/57W510_WEBIMAGE_003.jpg" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://www.kaleidoscope.co.uk/blog/wp-content/uploads/2019/09/92S580_ARA_025_R-NS-e1592055552399.jpg" style="height:20%;width: 20%;margin-left: 5%;">
`;
            } else if (bodyType === 'apple') {
                recommendations += `
                   
        </section>
        <img src="https://blog.g3fashion.com/wp-content/uploads/2022/09/light_green_crepe_casual_wear_pant_set_1661516229as2449488_1-640x853.jpg" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://cdn.shopify.com/s/files/1/0105/8881/5418/files/blog_dressing_guide_22jul22-04.jpg?v=1658486557" style="height:20%;width: 25%;margin-left: 5%;">
    <img src="https://lh3.googleusercontent.com/6M9naB2tjn0n3EyLVSW2xYonoU3SsiJKQdWoysMg4e214rznpsWc3nczXHYJO6aA1Sjs5icW1s9KQn8INX7sljLlu8A2IvL3Tworhd06xLFcQnk9XYD8xdUSL0eLLTm0AnvvY8SC" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://www.datocms-assets.com/109096/1704474819-vestido-para-cuerpo-triangulo.jpeg?dpr=4" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://www.datocms-assets.com/109096/1704474847-01_collage_formal.jpeg?dpr=2" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://www.datocms-assets.com/109096/1704474855-00_00_02_triangulo_formal.jpeg?dpr=2" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://styledna.ai/wp-content/uploads/2024/03/Flutter_sleeves_for_.jpg.webp" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://styledna.ai/wp-content/uploads/2024/03/Petal_sleeves_for_th.jpg.webp" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://styledna.ai/wp-content/uploads/2024/03/Top_for_the_triangle-1.jpg.webp" style="height:20%;width: 20%;margin-left: 5%;">
        `;
            } else if (bodyType === 'hourglass') {
                recommendations += `
                
        </section>
        <img src="https://cdn.shopify.com/s/files/1/0666/3041/products/New_Project_6_grande.jpg?v=1583271186" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://cdn.shopify.com/s/files/1/0666/3041/products/1q0a6039_grande.jpg?v=1581753073" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://cdn.shopify.com/s/files/1/0666/3041/products/y2_grande.jpg?v=1583324672" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/size_0000s_0000__x2a7841.jpg" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/size__0000s_0004__x2a7675.jpg" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/size__0000s_0001__x2a7794.jpg" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/4736.jpg" style="height:20%;width: 20%;margin-left: 15%;">
    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/19fw_4518.jpg" style="height:20%;width: 20%;margin-left: 5%;">
    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/4623.jpg" style="height:20%;width: 20%;margin-left: 5%;">`;
            }
        }

        recommendations += '</ul>';
    } else {
        recommendations = 'Please select both gender and body type to receive recommendations.';
    }

    recommendationsDiv.innerHTML = recommendations;
});
