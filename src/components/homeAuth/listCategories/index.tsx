import "../../../../styles/slideCategory.module.scss";
import useSWR from "swr";
import categoriesService, { CategoryType } from "../../../services/categoriesService";
import ListCategoriesSlide from "../listCategoriesSlide";
import React from "react";

const ListCategories = function () {
    const { data, error } = useSWR("/listCategories", categoriesService.getCategories);

    if (error) return error;
    return (
        <>
            {!data ? (
                <p>Loading...</p>
            ) : (

                data.data?.categories?.map((category: CategoryType) => (
                    <React.Fragment key={category.id}>
                        <p>{category.name}</p>
                        <ListCategoriesSlide key={category.id}
                            categoryId={category.id}
                            categoryName={category.name}
                        />
                    </React.Fragment>
                ))
            )}
        </>
    );
}

export default ListCategories;